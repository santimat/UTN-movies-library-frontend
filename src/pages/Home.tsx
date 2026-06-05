import { MovieList } from '@/components/layout/MovieList';
import { FilterBar } from '@/components/layout/FilterBar';
import { getMovies } from '@/services/movies/movieService';

export function Home() {
  getMovies();
  return (
    <>
      <title>Biblioteca de Películas</title>
      <FilterBar />
      <MovieList />
    </>
  );
}
