import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Loader } from '@/shared/components/ui/Loader';
export function Logout() {
  const { logout, loading } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigate('/');
    };
    performLogout();
  }, [logout, navigate]);

  if (loading) return <Loader />;

  return null;
}
