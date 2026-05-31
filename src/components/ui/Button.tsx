import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function Button({ href, className: classes, children }: ButtonProps) {
  return (
    <NavLink
      className={`border-2 border-neutral p-2 font-bold whitespace-nowrap transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95 ${classes}`}
      to={href}
    >
      {children}
    </NavLink>
  );
}
