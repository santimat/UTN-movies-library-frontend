import { NavLink } from 'react-router';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

export function Button({ text, href, className: classes }: ButtonProps) {
  return (
    <NavLink
      className={`w-fit border-2 border-neutral p-2 font-bold whitespace-nowrap transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95 ${classes}`}
      to={href}
    >
      {text}
    </NavLink>
  );
}
