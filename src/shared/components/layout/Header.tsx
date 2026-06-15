import { Link } from 'react-router';
import { NavBar } from '@/shared/components/layout/navbar/NavBar';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-neutral px-6 py-4">
      <h1 className="font-headline text-2xl font-bold">
        <Link to={'/'}>Biblioteca de peliculas</Link>
      </h1>
      <NavBar />
    </header>
  );
}
