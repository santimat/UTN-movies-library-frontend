import { MovieList } from '@/features/movies/components/MovieList';
import { Filters } from '@/features/movies/components/FilterBar';
import { Pagination } from '@/features/movies/components/Pagination';

export function Home() {
  return (
    <>
      <Filters />
      <MovieList />
      <Pagination />
    </>
  );
}
