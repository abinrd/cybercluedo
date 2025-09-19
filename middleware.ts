// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/'];
const AUTH_PAGES = ['/auth/login', '/auth/signup'];
const SESSION_COOKIE = 'session';

// --- helper to verify HS256 JWT ---
async function isValidJWT(token?: string) {
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    await jwtVerify(token, secret, { algorithms: ['HS256'] });
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- 1. Always allow framework internals, APIs, assets ---
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // --- 2. Public routes (no auth needed) ---
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  // --- 3. Check session cookie / JWT ---
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const valid = await isValidJWT(session);

  // --- 4. Block authenticated users from visiting login/signup ---
  if (valid && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL('/event', request.url));
  }

  // --- 5. Allow unauthenticated users to reach AUTH_PAGES ---
  if (!valid && AUTH_PAGES.includes(pathname)) {
    return NextResponse.next();
  }

  // --- 6. Special gate for /files based on status cookie ---
  if (pathname.startsWith('/files')) {
    const status = request.cookies.get('status')?.value;
    if (status !== '1') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    // If status ok, still need auth
    if (!valid) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
  }

  // --- 7. Default: require valid session for everything else ---
  if (!valid) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run for app routes (skip _next, api, static, and files with ext)
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
