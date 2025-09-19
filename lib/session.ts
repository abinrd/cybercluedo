// lib/session.ts
import { cookies } from 'next/headers';
import { verifySession, SESSION_COOKIE } from './auth';

export async function getServerSession() {
  const token = await cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const payload = await verifySession(token);
    return payload;
  } catch {
    return null;
  }
}
