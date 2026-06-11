import { MovieList } from '@/features/movies/components/MovieList';
import { Filters } from '@/features/movies/components/FilterBar';
import { lazy } from 'react';

const Pagination = lazy(() =>
  import('@/features/movies/components/Pagination').then((module) => ({
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
