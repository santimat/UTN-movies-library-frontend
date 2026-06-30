import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router';
import { BurguerIcon } from '@/shared/components/icons/Burguer';
import { type HeaderNavItem } from '@/shared/components/layout/navbar/types';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useShallow } from 'zustand/shallow';
import { AuthButton } from '@/shared/components/ui/NavBarActions';

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

  const [isOpen, setIsOpen] = useState(false);
  const showNav = isOpen ? '' : 'translate-x-full';
  const handleClick = () => {
    window.document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    setIsOpen((prev) => !prev);
  };

  // close navbar when user navigates
  const handleNavClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const isLink = target.tagName === 'A';
    const isOutside = !(target.tagName === 'NAV');
    if (isLink || isOutside) {
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
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 ${showNav} w-full`}
        onClick={handleNavClick}
      >
        <nav className="ml-auto flex h-dvh w-3/4 flex-col items-center justify-evenly bg-white/80 backdrop-blur-md">
          {user?.email && (
            <p className="text-center font-semibold text-neutral">
              Nombre de usuario:
              <span className="block text-2xl font-bold first-letter:capitalize">
                {user?.name}
              </span>
            </p>
          )}
          <ul className="grid gap-6 text-center text-2xl">
            {navItems.map(({ text, href }) => {
              if (href.includes('my-list') && !user?.id) return;
              return (
                <li key={href}>
                  <Link className={handleIsActive(href)} to={href}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-4 text-center">
            <AuthButton pathname={pathname} />
          </div>
        </nav>
      </div>
    </>
  );
}
