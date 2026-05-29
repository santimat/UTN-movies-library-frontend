import { NavBar } from '@/components/layout/NavBar';

export function Header() {
  return (
    <header className="grid grid-cols-3 justify-center border-b-2 border-neutral p-4 font-headline text-neutral uppercase outline-2">
      <h1 className="text-3xl font-bold">Biblioteca de peliculas</h1>
      <NavBar />
    </header>
  );
}
