import { MovieList } from '@/features/movies/components/MovieList';
import { Filters } from '@/shared/components/layout/FilterBar';
import { lazy } from 'react';

const Pagination = lazy(() =>
  import('@/shared/components/ui/Pagination').then((module) => ({
    default: module.Pagination,
  }))
);
export function Home() {
  return (
    <>
      <Filters />
      <MovieList />
      <Pagination />
    </>
  );
}
