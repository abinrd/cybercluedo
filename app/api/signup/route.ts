import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { users, teams, teamMembers } from '@/supabase/migrations/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import crypto from 'crypto';

type MemberInput = { name: string; email: string };
type Body = {
  teamName: string;
  owner: { name: string; email: string; password: string };
  members: MemberInput[]; // must be exactly 2 entries
};

const JWT_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Body;

    if (
      !body?.teamName ||
      !body?.owner?.name ||
      !body?.owner?.email ||
      !body?.owner?.password ||
      !Array.isArray(body.members) ||
      body.members.length !== 2 ||
      body.members.some((m) => !m.name || !m.email)
    ) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const hash = await bcrypt.hash(body.owner.password, 12);

    const temp1 = crypto.randomBytes(32).toString('hex');
    const temp2 = crypto.randomBytes(32).toString('hex');
    const tempHash1 = await bcrypt.hash(temp1, 12);
    const tempHash2 = await bcrypt.hash(temp2, 12);

    const now = new Date().toISOString();
    let ownerId: string | null = null;
    let teamId: string | null = null;

    await db.transaction(async (tx) => {
      const existingOwner = await tx
        .select({ id: users.id })
        .from(users)
        .where(eq(users.email, body.owner.email))
        .limit(1);

      if (existingOwner.length > 0) {
        throw new Error('Owner email already registered');
      }

      const [ownerRow] = await tx
        .insert(users)
        .values({
          name: body.owner.name,
          email: body.owner.email,
          password: hash,
          createdAt: now,
        })
        .returning({ id: users.id });

      ownerId = ownerRow.id;

      const memberIds: string[] = [];
      for (const [i, m] of body.members.entries()) {
        const existing = await tx
          .select({ id: users.id })
          .from(users)
          .where(eq(users.email, m.email))
          .limit(1);

        if (existing.length > 0) {
          memberIds.push(existing[0].id);
        } else {
          const tempHash = i === 0 ? tempHash1 : tempHash2;
          const [row] = await tx
            .insert(users)
            .values({
              name: m.name,
              email: m.email,
              password: tempHash,
              createdAt: now,
            })
            .returning({ id: users.id });
          memberIds.push(row.id);
        }
      }

      const [teamRow] = await tx
        .insert(teams)
        .values({
          name: body.teamName,
          ownerId: ownerId!,
          createdAt: now,
        })
        .returning({ id: teams.id });

      teamId = teamRow.id;

      await tx.insert(teamMembers).values({
        teamId: teamId!,
        userId: ownerId!,
        role: 'owner',
        joinedAt: now,
      });

      for (const mid of memberIds) {
        await tx.insert(teamMembers).values({
          teamId: teamId!,
          userId: mid,
          role: 'member',
          joinedAt: now,
        });
      }
    });
    const jwtSecret = new TextEncoder().encode(requireEnv('JWT_SECRET'));
    const token = await new SignJWT({
      sub: ownerId || "",
      teamId,
      email: body.owner.email,
      role: 'owner',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(`${JWT_TTL_SEC} sec`)
      .sign(jwtSecret);

    const res = NextResponse.json(
      {
        teamId,
        ownerId,
        message: 'Team created and session issued',
      },
      { status: 201 }
    );

    res.cookies.set('session', token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: true,
      maxAge: JWT_TTL_SEC,
    });

    return res;
  } catch (err: any) {
    console.error('Team signup error:', err); // shows cause and stack
    const detail = err?.cause?.message || err?.message || 'Signup failed';
    return NextResponse.json({ error: detail }, { status: 400 });
  }
}
