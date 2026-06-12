import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useShallow } from 'zustand/shallow';
import { Loader } from '@/shared/components/ui/Loader';

export function AdminRoute() {
  const { user, hydrateUser, loading } = useAuthStore(
    useShallow((s) => ({
      user: s.user,
      loading: s.loading,
      hydrateUser: s.hydrateUser,
    }))
  );

  useEffect(() => {
    hydrateUser('admin');
  }, [hydrateUser]);

  if (loading) return <Loader />;

  if (user?.role !== 'ADMIN') return <Navigate to="/" replace />;

  return <Outlet />;
}
