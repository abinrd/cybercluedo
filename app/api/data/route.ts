/* eslint-disable  @typescript-eslint/no-explicit-any */
import {db} from '@/lib/db';
import { teams } from '@/supabase/migrations/schema';
import { NextResponse, NextRequest } from 'next/server';
import { desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
    try {
    const code = req.nextUrl.searchParams.get('code');
    if (code!="abinrajuisgreat") {
      return NextResponse.json({ error: 'Pinngggggg' }, { status: 400 });
    }
const rows = await db
  .select()
  .from(teams)
  .orderBy(desc(teams.points));
    return NextResponse.json(rows);
}catch (err: any) {
    const detail = err?.cause?.message || err?.message || 'Request failed';
    return NextResponse.json({ error: detail }, { status: 400 });
  }
}