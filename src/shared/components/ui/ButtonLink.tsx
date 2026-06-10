import type { ReactNode } from 'react';
import { Link } from 'react-router';

interface ButtonProps {
  children: ReactNode;
  to: string;
  className?: string;
  isActive?: boolean;
}

export function ButtonLink({
  to: href,
  className: classes = '',
  children,
  isActive,
}: ButtonProps) {
  const classesToAdd = `border-2 p-2 font-bold whitespace-nowrap transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 border-neutral active:scale-95 ${isActive ? 'hidden' : ''} ${classes}`;

  return (
    <Link className={classesToAdd} to={href}>
      {children}
    </Link>
  );
}
