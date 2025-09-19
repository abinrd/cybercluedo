import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_PATHS = ['/'];
const AUTH_PAGES = ['/auth/login', '/auth/signup'];
const SESSION_COOKIE = 'session';

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

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const valid = await isValidJWT(session);

  if (valid && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL('/event', request.url));
  }

  if (!valid && AUTH_PAGES.includes(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/files')) {
    if (!valid) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    const status = request.cookies.get('status')?.value;
    if (status !== '1') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
  if (pathname.startsWith('/event')) {
    if (!valid) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    return NextResponse.next();
  }

  if (!valid) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
