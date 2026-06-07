import { Outlet, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import { Loader } from '@/components/ui/Loader';
export function GuardRoute() {
  const { user, loading, hydrateUser } = useAuthStore();

  const isLoginPage = window.location.pathname === '/auth';
  useEffect(() => {
    hydrateUser();
    console.log('GuardRoute: Hydrating user data');
  }, [hydrateUser]);

  if (loading) return <Loader />;
  if (isLoginPage && user?.email) return <Navigate to="/" />;

  return <Outlet />;
}
