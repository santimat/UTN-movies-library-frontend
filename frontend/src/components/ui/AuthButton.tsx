import { NavLink } from 'react-router';

interface AuthButtonProps {
  text: string;
  href: string;
}

export function AuthButton({ text, href }: AuthButtonProps) {
  const isRegister = href.includes('/sign-in');
  const classes = isRegister ? 'bg-secondary text-white' : '';

  return (
    <NavLink
      className={`border-2 border-neutral px-2 py-1 font-bold transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95 ${classes}`}
      to={href}
    >
      {text}
    </NavLink>
  );
}
