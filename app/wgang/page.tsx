'use client';
import AccessDenied from '@/components/AccessDenined';
import AdminDashboard from '@/components/AdminPage';

export const dynamic = 'force-dynamic';
export default function AdminPage({ searchParams }: { searchParams: { code?: string } }) {
  const code = searchParams.code ?? null;
  if (code !== 'abinrajuisgreat') return <AccessDenied />;
  return <AdminDashboard />;
}
