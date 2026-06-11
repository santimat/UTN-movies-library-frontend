import { Loader } from '@/shared/components/ui/Loader';
import { useMovies } from '@/features/movies/hooks/useMovies';
import { MovieCard } from '@/features/movies/components/MovieCard';

export function MovieList() {
  const { movies, loading, error } = useMovies();

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
    <div className="mx-auto grid w-[95%] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-8">
      {movies.map((movie, idx) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} idx={idx} />
      ))}
    </div>
  );
}
