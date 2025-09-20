'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import AccessDenied from '@/components/AccessDenined';
import AdminDashboard from '@/components/AdminPage';

function Gate() {
  const sp = useSearchParams();
  const code = sp.get('code');
  if (code !== 'abinrajuisgreat') return <AccessDenied />;
  return <AdminDashboard />;
}

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <Gate />
    </Suspense>
  );
}
