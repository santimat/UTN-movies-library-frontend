import { lazy } from 'react';
const MovieList = lazy(() =>
  import('@/components/layout/MovieList').then((module) => ({
    default: module.MovieList,
  }))
);
const FilterBar = lazy(() =>
  import('@/components/layout/FilterBar').then((module) => ({
    default: module.FilterBar,
  }))
);

export function Home() {
  return (
    <>
      <title>Biblioteca de Películas</title>
      <FilterBar />
      <MovieList />
    </>
  );
}
