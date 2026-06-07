import { useState, type MouseEvent } from 'react';
import { NavLink } from 'react-router';
import type { HeaderNavItem } from '@/types/HeaderNavItem';
import { BurguerIcon } from '@/components/icons/Burguer';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/useAuthStore';
interface MobileNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: ({ isActive }: { isActive: boolean }) => string;
}

export function MobileNav({ navItems, handleIsActive }: MobileNavProps) {
  const { user: isAuth } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const showNav = isOpen ? '' : 'translate-x-full';
  const handleClick = () => {
    window.document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen((prev) => !prev);
  };

  // close navbar when user navigates
  const handleNavClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const isLink = target.tagName === 'A';
    if (isLink) {
      window.document.body.style.overflow = 'auto';
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`z-50 hover:cursor-pointer active:scale-95`}
      >
        <BurguerIcon className="pointer-events-none w-8" />
      </button>
      <nav
        className={`fixed right-0 bottom-0 z-40 flex h-dvh w-3/4 flex-col items-center justify-evenly bg-white/80 backdrop-blur-md transition-transform duration-500 ${showNav}`}
        onClick={handleNavClick}
      >
        <ul className="grid gap-6 text-center text-2xl">
          {navItems.map(({ text, href }) => (
            <li key={href}>
              <NavLink className={handleIsActive} to={href}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        {!isAuth && (
          <Button href="/auth" className="bg-tertiary text-white">
            Iniciar Sesión
          </Button>
        )}
      </nav>
    </>
  );
}
