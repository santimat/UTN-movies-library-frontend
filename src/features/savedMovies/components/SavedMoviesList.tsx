import { MovieCard } from '@/features/movies/components/MovieCard';
import type { Movie } from '@/shared/types';

type SavedMoviesListProps = {
  savedMovies: Movie[];
};
export function SavedMoviesList({ savedMovies }: SavedMoviesListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-8">
      {savedMovies.map((savedMovie, idx) => (
        <MovieCard {...savedMovie} idx={idx} />
      ))}
    </ul>
  );
}
