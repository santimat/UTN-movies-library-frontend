import { MovieList } from '@/components/layout/MovieList';
import { FilterBar } from '@/components/layout/FilterBar';

export function Home() {
  return (
    <>
      <title>Biblioteca de Películas</title>
      <FilterBar />
      <MovieList />
    </>
  );
}
