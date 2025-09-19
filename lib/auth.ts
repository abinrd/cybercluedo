// lib/auth.ts
import { SignJWT, jwtVerify, JWTPayload } from 'jose';

// Use a single cookie name/project-wide
export const SESSION_COOKIE = 'session';
export const JWT_TTL_SEC = 60 * 60 * 24 * 7; // 7 days

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

function getSecretKey() {
  return new TextEncoder().encode(requireEnv('JWT_SECRET'));
}

export type SessionPayload = {
  sub: string;
  teamId: string | null;
  email: string;
  role: 'owner' | 'member';
};

export async function signSession(payload: SessionPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${JWT_TTL_SEC} sec`)
    .sign(getSecretKey());
}

export async function verifySession(token: string) {
  const { payload } = await jwtVerify(token, getSecretKey(), {
    algorithms: ['HS256'],
  });
  return payload as JWTPayload & SessionPayload;
}
