import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useShallow } from 'zustand/shallow';
export function AdminRoute() {
  const { user, hydrateUser } = useAuthStore(
    useShallow((s) => ({
      user: s.user,
      hydrateUser: s.hydrateUser,
    }))
  );

  useEffect(() => {
    hydrateUser('admin');
  }, [hydrateUser]);

  if (user?.role !== 'ADMIN') return <Navigate to="/" />;

  return <Outlet />;
}
