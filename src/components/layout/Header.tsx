import { NavLink } from 'react-router';
import { NavBar } from '@/components/layout/NavBar';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-neutral p-4">
      <h1 className="font-headline text-2xl font-bold">
        <NavLink to={'/'}>Biblioteca de peliculas</NavLink>
      </h1>
      <NavBar />
    </header>
  );
}
