/* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { users, teams, teamMembers } from '@/supabase/migrations/schema'; 
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import crypto from 'crypto';
import Cookies from 'js-cookie';
type MemberInput = { name: string; email: string };
type Body = {
  teamName: string;
  owner: { name: string; email: string; password: string };
  members: MemberInput[]; 
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
      body.members.length > 4 ||
      body.members.some((m) => !m.name || !m.email)
    ) {
      return NextResponse.json(
        { error: 'Invalid payload (team must have 1 to 5 members including owner)' },
        { status: 400 }
      );
    }

    {
      const emails = [body.owner.email.toLowerCase(), ...body.members.map((m) => m.email.toLowerCase())];
      const uniq = new Set(emails);
      if (uniq.size !== emails.length) {
        return NextResponse.json({ error: 'Duplicate emails in team' }, { status: 400 });
      }
    }

    const ownerHash = await bcrypt.hash(body.owner.password, 12);

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
          password: ownerHash,
          createdAt: now,
        })
        .returning({ id: users.id });

      ownerId = ownerRow.id;

      const memberIds: string[] = [];
      for (const m of body.members) {
        const existing = await tx
          .select({ id: users.id })
          .from(users)
          .where(eq(users.email, m.email))
          .limit(1);

        if (existing.length > 0) {
          memberIds.push(existing[0].id);
        } else {
          const temp = crypto.randomBytes(32).toString('hex');
          const tempHash = await bcrypt.hash(temp, 12);

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
      sub: ownerId || '',
      teamId,
      email: body.owner.email,
      role: 'owner',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(`${JWT_TTL_SEC} sec`)
      .sign(jwtSecret);
    void token;
    const res = NextResponse.json(
      {
        teamId,
        ownerId,
        message: 'Team created and session issued',
      },
      { status: 201 }
    );
        const rows = await db
          .select({ id: users.id, email: users.email, password: users.password })
          .from(users)
          .where(eq(users.email, body.owner.email))
          .limit(1);
    
        if (rows.length === 0) {
          return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }
        const user = rows[0];
    const teamRow = await db
      .select({ teamId: teamMembers.teamId })
      .from(teamMembers)
      .where(eq(teamMembers.userId, user.id))
      .limit(1);
    const teammRow = await db
      .select({ name: teams.name })
      .from(teams)
      .where(eq(teams.id, teamRow[0].teamId));
    const temid = teamRow.length > 0 ? teamRow[0].teamId : null;
    Cookies.set("teamId", temid || "");
    Cookies.set("teamName", teammRow[0]?.name || "");


    return res;
  } catch (err: any) {
    console.error('Team signup error:', err);
    const detail = err?.cause?.message || err?.message || 'Signup failed';
    return NextResponse.json({ error: detail }, { status: 400 });
  }
}