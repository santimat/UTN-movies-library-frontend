import { useState, type MouseEvent } from 'react';
import { NavLink } from 'react-router';
import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { BurguerIcon } from '@/components/icons/Burguer';

interface MobileNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: ({ isActive }: { isActive: boolean }) => string;
}

export function MobileNav({ navItems, handleIsActive }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(true);
  const showNav = isOpen ? '' : 'translate-x-full';
  const handleClick = () => setIsOpen((prev) => !prev);

  // close navbar when user navigates
  const handleNavClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const isLink = target.tagName === 'A';
    if (isLink) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="relative z-20 hover:cursor-pointer active:scale-95"
      >
        <BurguerIcon className="pointer-events-none} w-8" />
      </button>
      <nav
        className={`absolute right-0 bottom-0 z-10 h-dvh w-3/4 bg-white/80 backdrop-blur-lg transition-transform duration-500 ${showNav} flex flex-col items-center justify-center`}
      >
        <ul className="grid gap-5 text-center" onClick={handleNavClick}>
          {navItems.map(({ text, href }) => (
            <li key={href}>
              <NavLink className={handleIsActive} to={href}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
