import { MovieList } from '@/features/movies/components/MovieList';
import { Filters } from '@/shared/components/layout/FilterBar';

export function Home() {
  return (
    <>
      <Filters />
      <MovieList />
    </>
  );
}
