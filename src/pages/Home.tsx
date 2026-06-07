import { MovieList } from '@/features/movies/components/MovieList';
import { FilterBar } from '@/features/movies/components/FilterBar';
import { Pagination } from '@/features/movies/components/Pagination';

export function Home() {
  return (
    <>
      <title>Biblioteca de Películas</title>
      <FilterBar />
      <MovieList />
      <Pagination />
    </>
  );
}
