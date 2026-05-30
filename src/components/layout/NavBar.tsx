import { useState } from 'react';
import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BurguerIcon } from '@/components/icons/Burguer';
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
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:768px)');

  const handleClick = () => setIsOpen((prev) => !prev);
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? 'border-b-3 border-secondary'
      : 'text-neutral/50 hover:bg-neutral/50 hover:text-white py-1 px-2 transition-colors';
  };

  if (isDesktop)
    return <DesktopNav navItems={navItems} handleIsActive={handleIsActive} />;

  return (
    <>
      <button
        onClick={handleClick}
        className="relative z-20 hover:cursor-pointer active:scale-95"
      >
        <BurguerIcon className="pointer-events-none} w-8" />
      </button>
      <MobileNav
        navItems={navItems}
        handleIsActive={handleIsActive}
        isOpen={isOpen}
      />
    </>
  );
}
