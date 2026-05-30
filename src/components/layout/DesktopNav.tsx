import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { Button } from '@/components/ui/Button';
import { NavLink } from 'react-router';

interface DesktopNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: ({ isActive }: { isActive: boolean }) => string;
}

export function DesktopNav({ navItems, handleIsActive }: DesktopNavProps) {
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
      <Button
        href="/login"
        text="Iniciar Sesión"
        className="bg-tertiary text-white"
      />
    </nav>
  );
}
