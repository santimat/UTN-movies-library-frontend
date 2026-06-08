import { Button } from '@/shared/components/ui/Button';
import { NavLink } from 'react-router';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';

interface DesktopNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: ({ isActive }: { isActive: boolean }) => string;
}

export function DesktopNav({ navItems, handleIsActive }: DesktopNavProps) {
  const { user } = useAuthStore();
  const isAuthenticated = !!user?.email;
  const isAdmin = user?.role === 'ADMIN';
  return (
    <nav className="flex flex-1 items-center justify-end gap-10">
      <ul className="flex gap-4 font-label text-xl font-semibold">
        {navItems.map(({ text, href }) => (
          <li key={href} className="whitespace-nowrap">
            <NavLink className={handleIsActive} to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        {isAdmin && (
          <Button href="/admin" className="bg-tertiary text-white">
            Panel de administración
          </Button>
        )}
        {!isAuthenticated ? (
          <Button href="/auth" className="bg-tertiary text-white">
            Iniciar Sesión
          </Button>
        ) : (
          <Button href="/logout" className="bg-secondary text-white">
            Cerrar Sesión
          </Button>
        )}
      </div>
    </nav>
  );
}
