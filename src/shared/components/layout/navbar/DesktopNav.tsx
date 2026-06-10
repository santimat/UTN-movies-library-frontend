import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { Link } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';

interface DesktopNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: (href: string) => string;
  pathname: string;
}

export function DesktopNav({
  navItems,
  handleIsActive,
  pathname,
}: DesktopNavProps) {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = !!user?.email;
  const isAdmin = user?.role === 'ADMIN';

  return (
    <nav className="flex flex-1 items-center justify-end gap-10">
      <ul className="flex gap-4 font-label text-xl font-semibold">
        {navItems.map(({ text, href }) => (
          <li key={href} className="whitespace-nowrap">
            <Link className={handleIsActive(href)} to={href}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {isAdmin && (
          <ButtonLink
            href="/admin"
            className="bg-tertiary text-white"
            isActive={pathname === '/admin'}
          >
            Panel de administración
          </ButtonLink>
        )}
        {!isAuthenticated ? (
          <ButtonLink
            href="/auth"
            className="bg-tertiary text-white"
            isActive={pathname === '/auth'}
          >
            Iniciar Sesión
          </ButtonLink>
        ) : (
          <ButtonLink
            href="/logout"
            className="bg-secondary text-white"
            isActive={pathname === '/logout'}
          >
            Cerrar Sesión
          </ButtonLink>
        )}
      </div>
    </nav>
  );
}
