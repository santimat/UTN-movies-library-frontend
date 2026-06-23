import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { sileo } from 'sileo';
import type { AppError } from '@/shared/types';
export function Logout() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
      } catch (err) {
        const { error } = err as AppError;
        sileo.error({
          title: 'Error al cerrar sesión',
          description: error,
        });
      }
    };
    performLogout();
    navigate('/');
  }, [logout, navigate]);

  return null;
}
