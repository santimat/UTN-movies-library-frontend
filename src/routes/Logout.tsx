import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
export function Logout() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return null;
}
