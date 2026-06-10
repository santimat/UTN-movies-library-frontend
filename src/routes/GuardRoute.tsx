import { Outlet, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useShallow } from 'zustand/shallow';
import { useMatch } from 'react-router';
export function GuardRoute() {
  const { user, hydrateUser } = useAuthStore(
    useShallow((s) => ({
      user: s.user,
      hydrateUser: s.hydrateUser,
    }))
  );

  const isLoginPage = useMatch('/auth');
  useEffect(() => {
    hydrateUser();
  }, [hydrateUser]);

  if (isLoginPage && user?.email)
    return (
      <>
        <Navigate to="/" replace />
        <Outlet />
      </>
    );

  return <Outlet />;
}
