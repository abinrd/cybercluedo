/* eslint-disable  @typescript-eslint/no-explicit-any */
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users, teamMembers, teams } from '@/supabase/migrations/schema'; 
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import { signSession, SESSION_COOKIE, JWT_TTL_SEC } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = (await req.json()) as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const rows = await db
      .select({ id: users.id, email: users.email, password: users.password })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    const teamRow = await db
      .select({ teamId: teamMembers.teamId })
      .from(teamMembers)
      .where(eq(teamMembers.userId, user.id))
      .limit(1);
    const teammRow = await db
      .select({ name: teams.name })
      .from(teams)
      .where(eq(teams.id, teamRow[0].teamId));
    console.log('User teams:', teammRow);
    const teamId = teamRow.length > 0 ? teamRow[0].teamId : null;
    console.log('User name:', teammRow[0]?.name);
    const token = await signSession({
      sub: user.id,
      teamId,
      email: user.email,
      role: 'owner', 
    });

    const res = NextResponse.json({ ok: true, teamId: teamId, name: teammRow[0]?.name, userId: user.id }, { status: 200 });
    res.cookies.set(SESSION_COOKIE, token);
    return res;
  } catch (err: any) {
    const detail = err?.cause?.message || err?.message || 'Login failed';
    return NextResponse.json({ error: detail }, { status: 400 });
  }
}
