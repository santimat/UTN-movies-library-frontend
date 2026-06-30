import { lazy } from 'react';
import { Loader } from '@/shared/components/ui/Loader';
import { useMovies } from '@/features/movies/hooks/useMovies';
import { MovieCard } from '@/features/movies/components/MovieCard';
import { useMovieSearchParams } from '../hooks/useMovieSearchParams';

const Pagination = lazy(() =>
  import('@/shared/components/ui/Pagination').then((module) => ({
    default: module.Pagination,
  }))
);

export function MovieList() {
  const { filters, updateSearchParam } = useMovieSearchParams();
  const { movies, loading, error, currentPage, totalPages } = useMovies(
    filters,
    '5'
  );

  if (loading) {
    return <Loader />;
  }

  if (error)
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-headline text-2xl font-bold text-secondary uppercase">
          {error.error}
        </p>
      </div>
    );

  if (!movies.length)
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-headline text-2xl font-bold text-neutral uppercase">
          No se encontraron peliculas.
        </p>
      </div>
    );

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-8">
        {movies.map((movie, idx) => (
          <li key={`movie-card-${movie.id}`}>
            <MovieCard {...movie} idx={idx} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          updatePage={updateSearchParam}
        />
      )}
    </>
  );
}
