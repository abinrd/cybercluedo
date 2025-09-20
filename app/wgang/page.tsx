'use client'; // Make sure this is at the top

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AccessDenied from '@/components/AccessDenined';
import AdminDashboard from '@/components/AdminPage';
export default function AdminPage() {
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or your loading component
  }

  const code = searchParams.get("code");
  if (code !== 'abinrajuisgreat') return <AccessDenied />;
  return <AdminDashboard />;
}
