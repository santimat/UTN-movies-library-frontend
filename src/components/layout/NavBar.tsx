import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DesktopNav } from '@/components/layout/DesktopNav';
import { MobileNav } from '@/components/layout/MobileNav';

const navItems: HeaderNavItem[] = [
  {
    text: 'Todo',
    href: '/',
  },
  {
    text: 'Peliculas',
    href: '/movies',
  },
  {
    text: 'Series',
    href: '/series',
  },
  {
    text: 'Mi Lista',
    href: '/my-list',
  },
] as const;

export function NavBar() {
  // For mobile navbar
  const isDesktop = useMediaQuery('(min-width:768px)');

  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return `p-2 ${
      isActive
        ? 'border-b-3 border-secondary'
        : 'text-neutral/50 hover:bg-neutral/50 hover:text-white transition-colors'
    }`;
  };

  if (isDesktop)
    return <DesktopNav navItems={navItems} handleIsActive={handleIsActive} />;

  return <MobileNav navItems={navItems} handleIsActive={handleIsActive} />;
}
