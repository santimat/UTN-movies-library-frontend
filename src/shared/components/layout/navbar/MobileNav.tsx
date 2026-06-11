import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router';
import { BurguerIcon } from '@/shared/components/icons/Burguer';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useShallow } from 'zustand/shallow';

interface MobileNavProps {
  navItems: HeaderNavItem[];
  handleIsActive: (href: string) => string;
  pathname: string;
}

export function MobileNav({
  navItems,
  handleIsActive,
  pathname,
}: MobileNavProps) {
  const user = useAuthStore(useShallow((s) => s.user));
  const isAuthenticated = !!user?.email;

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
              <Link className={handleIsActive(href)} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        {!isAuthenticated ? (
          <ButtonLink
            to="/auth"
            className="bg-tertiary text-white"
            isActive={pathname === '/auth'}
          >
            Iniciar Sesión
          </ButtonLink>
        ) : (
          <ButtonLink
            to="/logout"
            className="bg-tertiary text-white"
            isActive={pathname === '/auth'}
          >
            Cerrar Sesión
          </ButtonLink>
        )}
        {isAuthenticated && user?.role === 'ADMIN' && (
          <ButtonLink to="/admin" className="bg-secondary text-white">
            Panel de administración
          </ButtonLink>
        )}
      </nav>
    </>
  );
}
