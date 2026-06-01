import { lazy } from 'react';
import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const DesktopNav = lazy(() =>
  import('@/components/layout/DesktopNav').then((module) => ({
    default: module.DesktopNav,
  }))
);
const MobileNav = lazy(() =>
  import('@/components/layout/MobileNav').then((module) => ({
    default: module.MobileNav,
  }))
);

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
