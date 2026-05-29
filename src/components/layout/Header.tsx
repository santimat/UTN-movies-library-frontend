import { NavLink } from 'react-router';
import { NavBar } from '@/components/layout/NavBar';
import { AuthButton } from '@/components/ui/AuthButton';

export function Header() {
  return (
    <header className="grid grid-cols-3 items-center justify-center border-b-2 border-neutral p-4 text-neutral uppercase outline-2">
      <h1 className="font-headline text-2xl font-bold">
        <NavLink to={'/'}>Biblioteca de peliculas</NavLink>
      </h1>
      <NavBar />
      <div className="flex justify-end gap-4">
        <AuthButton text="Inciar sesión" href="/login" />
        <AuthButton text="Registrarse" href="/sign-in" />
      </div>
    </header>
  );
}
