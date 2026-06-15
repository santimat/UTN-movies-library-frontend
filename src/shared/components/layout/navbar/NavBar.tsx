import { lazy } from 'react';
import { useLocation } from 'react-router';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';

const DesktopNav = lazy(() =>
  import('@/shared/components/layout/navbar/DesktopNav').then((module) => ({
    default: module.DesktopNav,
  }))
);
const MobileNav = lazy(() =>
  import('@/shared/components/layout/navbar/MobileNav').then((module) => ({
    default: module.MobileNav,
  }))
);

const navItems: HeaderNavItem[] = [
  {
    text: 'Todo',
    href: '/',
  },
  {
    text: 'Mi Lista',
    href: '/my-list',
  },
] as const;

export function NavBar() {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const { pathname } = useLocation();

  const handleIsActive = (href: string) => {
    const isActive = pathname === href;
    return `p-2 font-semibold ${
      isActive
        ? 'border-b-3 border-secondary'
        : 'text-neutral hover:bg-neutral/50 hover:text-white transition-colors'
    }`;
  };

  if (isDesktop)
    return (
      <DesktopNav
        navItems={navItems}
        handleIsActive={handleIsActive}
        pathname={pathname}
      />
    );

  return (
    <MobileNav
      navItems={navItems}
      handleIsActive={handleIsActive}
      pathname={pathname}
    />
  );
}
