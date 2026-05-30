import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { NavLink } from 'react-router';

interface MobileNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: ({ isActive }: { isActive: boolean }) => string;
  isOpen: boolean;
}

export function MobileNav({
  navItems,
  handleIsActive,
  isOpen,
}: MobileNavProps) {
  const showNav = isOpen ? '' : 'translate-x-full';
  return (
    <nav
      className={`absolute right-0 bottom-0 z-10 h-dvh w-3/4 bg-white/80 backdrop-blur-lg transition-transform duration-500 ${showNav}`}
    >
      <ul>
        {navItems.map(({ text, href }) => (
          <li key={href}>
            <NavLink className={handleIsActive} to={href}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
