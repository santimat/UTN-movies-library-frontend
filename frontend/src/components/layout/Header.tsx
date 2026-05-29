import { NavBar } from "@/components/layout/NavBar";

export function Header() {
  return (
    <header>
      <h1 className="font-headline text-3xl font-bold text-neutral">
        Biblioteca de peliculas
      </h1>
      <NavBar />
    </header>
  );
}
