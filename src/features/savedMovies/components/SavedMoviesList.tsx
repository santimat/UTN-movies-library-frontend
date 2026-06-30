import { MovieCard } from '@/features/movies/components/MovieCard';
import type { Movie } from '@/shared/types';

type SavedMoviesListProps = {
  savedMovies: Movie[];
};
export function SavedMoviesList({ savedMovies }: SavedMoviesListProps) {
  if (!savedMovies.length) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-headline text-2xl font-bold text-neutral uppercase">
          No se encontraron peliculas.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-8">
      {savedMovies.map((savedMovie, idx) => (
        <li key={`savedMovie-card-${savedMovie.id}`}>
          <MovieCard {...savedMovie} idx={idx} isSavedMovie />
        </li>
      ))}
    </ul>
  );
}
