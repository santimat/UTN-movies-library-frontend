import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};
export function Button({
  children,
  className: classes,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer border-2 border-neutral p-2 shadow-auth transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95 ${classes}`}
    >
      {children}
    </button>
  );
}
