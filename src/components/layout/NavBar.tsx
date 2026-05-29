import { href, NavLink } from 'react-router';

const navItems = [
  {
    name: 'Todo',
    href: '/',
  },
  {
    name: 'Peliculas',
    href: '/movies',
  },
  {
    name: 'Series',
    href: '/series',
  },
  {
    name: 'Mi Lista',
    href: '/my-list',
  },
] as const;

export function NavBar() {
  const handleIsActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? 'border-b-3 border-secondary'
      : 'text-neutral/50 hover:bg-neutral/50 hover:text-white py-1 px-2 transition-colors';
  };
  return (
    <ul className="flex justify-center gap-4 font-label text-xl font-semibold">
      {navItems.map(({ name, href }) => (
        <li key={href}>
          <NavLink className={handleIsActive} to={href}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
