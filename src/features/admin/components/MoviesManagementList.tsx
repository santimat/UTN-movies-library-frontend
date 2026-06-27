import { type Movie } from '@/shared/types';
import { MovieManagementCard } from '@/features/admin/components/MovieManagementCard';

export function MoviesManagementList({ movies }: { movies: Movie[] }) {
  return (
    <>
      <ul className="mt-6 grid gap-4 lg:grid-cols-3">
        {movies.map((movie) => (
          <li key={`movie-management-${movie.id}`}>
            <MovieManagementCard movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
}
