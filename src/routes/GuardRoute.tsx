import { Outlet, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Loader } from '@/shared/components/ui/Loader';
export function GuardRoute() {
  const { user, loading, hydrateUser } = useAuthStore();

  const isLoginPage = window.location.pathname === '/auth';
  useEffect(() => {
    hydrateUser();
  }, [hydrateUser]);

  if (loading) return <Loader />;
  if (isLoginPage && user?.email)
    return (
      <>
        <Navigate to="/" replace />
        <Outlet />
      </>
    );

  return <Outlet />;
}
