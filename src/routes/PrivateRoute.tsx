import { Outlet, Navigate } from 'react-router';
import { lazy, useEffect, useState } from 'react';
import { authService } from '@/services/authService';
import { useAuthStore } from '@/store/useAuthStore';

const LoaderIcon = lazy(() =>
  import('@/components/icons/Loader').then((module) => ({
    default: module.LoaderIcon,
  }))
);

export const PrivateRoute = ({
  requireAuth = false,
  requireAdmin = false,
  navigateTo = '/auth',
}: {
  requireAuth: boolean;
  navigateTo: string;
  requireAdmin: boolean;
}) => {
  const { user, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const role = requireAdmin ? 'admin' : 'user';
      const res = await authService.checkAcces(role);
      if (res.ok) setUser(await res.json());
      setLoading(false);
    };
    fetchUser();
  }, [setUser, requireAdmin]);

  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <LoaderIcon />
      </div>
    );

  if (requireAuth && !user) return <Navigate to={navigateTo} replace />;
  return <Outlet />;
};
