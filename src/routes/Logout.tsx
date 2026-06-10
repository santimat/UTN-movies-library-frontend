import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
export function Logout() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  useEffect(() => {
    const performLogout = async () => {
      await logout();
    };
    performLogout();
    navigate('/');
  }, [logout, navigate]);

  return null;
}
