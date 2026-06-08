import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { MovieCard } from '@/features/movies/components/MovieCard';
import { Loader } from '@/shared/components/ui/Loader';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { type Movie } from '@/features/movies/types';

export function MovieList() {
  const [searchParams] = useSearchParams();
  const { movies, fetchMovies, loading, error } = useMoviesStore();

  const genre = searchParams.get('genre') || undefined;
  const sortBy = (searchParams.get('sortBy') as keyof Movie) || undefined;
  const sortOrder =
    (searchParams.get('sortOrder') as 'ASC' | 'DESC') || undefined;
  const searchText = searchParams.get('searchText') || undefined;

  useEffect(() => {
    fetchMovies({ genre, sortBy, sortOrder, searchText });
  }, [searchText, genre, sortBy, sortOrder, fetchMovies]);

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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:grid-cols-[repeat(auto-fit,minmax(250px,300px))] md:justify-normal">
      {movies.map((movie) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}
