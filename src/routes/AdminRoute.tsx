import { Outlet, Navigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
export function AdminRoute() {
  const { user } = useAuthStore();

  if (!user?.email) return <Navigate to="/" />;

  return <Outlet />;
}
