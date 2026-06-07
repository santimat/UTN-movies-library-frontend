import { lazy } from 'react';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

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

type HeaderNavItem = {
  text: string;
  href: string;
};
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
  // For mobile navbar
  const isDesktop = useMediaQuery('(min-width:768px)');
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return `p-2 font-semibold ${
      isActive
        ? 'border-b-3 border-secondary'
        : 'text-neutral hover:bg-neutral/50 hover:text-white transition-colors'
    }`;
  };

  if (isDesktop)
    return <DesktopNav navItems={navItems} handleIsActive={handleIsActive} />;

  return <MobileNav navItems={navItems} handleIsActive={handleIsActive} />;
}
