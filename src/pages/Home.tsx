import { MovieList } from '@/features/movies/components/MovieList';
import { FilterBar } from '@/shared/components/layout/FilterBar';

export function Home() {
  return (
    <>
      <FilterBar />
      <MovieList />
    </>
  );
}
