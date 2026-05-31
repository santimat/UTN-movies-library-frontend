import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function Button({ href, className: classes, children }: ButtonProps) {
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return `border-2 p-2 font-bold whitespace-nowrap transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 border-neutral active:scale-95 ${isActive && 'hidden'} ${classes}`;
  };
  return (
    <NavLink className={handleIsActive} to={href}>
      {children}
    </NavLink>
  );
}
