import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { LogoutIcon } from '@/shared/components/icons/Logout';
import { ToolIcon } from '@/shared/components/icons/Tool';
import { LoginIcon } from '@/shared/components/icons/Login';

export function AuthButton({ pathname }: { pathname: string }) {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = !!user?.email;
  const isAdmin = user?.role === 'ADMIN';

  return (
    <>
      {isAdmin && (
        <ButtonLink
          to="/admin"
          className="flex items-center justify-center bg-tertiary p-1! text-white"
          isActive={pathname === '/admin'}
        >
          <ToolIcon />
        </ButtonLink>
      )}
      {!isAuthenticated ? (
        <ButtonLink
          to="/auth"
          className="bg-tertiary p-1! text-white"
          isActive={pathname === '/auth'}
        >
          <LoginIcon />
        </ButtonLink>
      ) : (
        <ButtonLink
          to="/logout"
          className="bg-secondary p-1! text-white"
          isActive={pathname === '/logout'}
        >
          <LogoutIcon />
        </ButtonLink>
      )}
    </>
  );
}
