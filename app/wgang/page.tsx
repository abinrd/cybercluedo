'use client'; 

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AccessDenied from '@/components/AccessDenined';
import Cookies from "js-cookie";
import AdminDashboard from '@/components/AdminPage';
export default function AdminPage() {
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);
  useEffect(() => {
    setIsClient(true);
    const cookieValue = Cookies.get("goldi");
    setCookieValue(cookieValue);
  }, []);
  if (cookieValue !== 'abinrajuisgreat') return <AccessDenied />;
  return <AdminDashboard />;
}
