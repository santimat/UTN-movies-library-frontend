import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

export function AuthButton({ pathname }: { pathname: string }) {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = !!user?.email;
  const isAdmin = user?.role === 'ADMIN';

  return (
    <>
      {isAdmin && (
        <ButtonLink
          to="/admin"
          className="bg-tertiary text-white"
          isActive={pathname === '/admin'}
        >
          Panel de administración
        </ButtonLink>
      )}
      {!isAuthenticated ? (
        <ButtonLink
          to="/auth"
          className="bg-tertiary text-white"
          isActive={pathname === '/auth'}
        >
          Iniciar Sesión
        </ButtonLink>
      ) : (
        <ButtonLink
          to="/logout"
          className="bg-secondary text-white"
          isActive={pathname === '/logout'}
        >
          Cerrar Sesión
        </ButtonLink>
      )}
    </>
  );
}
