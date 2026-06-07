import { Outlet, Navigate } from 'react-router';
import { useEffect, useState, lazy } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { authService } from '@/services/authService';

const LoaderIcon = lazy(() =>
  import('@/components/icons/Loader').then((module) => ({
    default: module.LoaderIcon,
  }))
);

export const PublicRoute = () => {
  const { user, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await authService.checkAcces('user');
      if (res.ok) setUser(await res.json());
      setLoading(false);
    };
    fetchUser();
  }, [setUser]);
  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        <LoaderIcon />
      </div>
    );

  return <Outlet />;
};
