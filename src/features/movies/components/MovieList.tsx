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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:grid-cols-[repeat(auto-fit,minmax(250px,300px))] md:justify-normal">
      {movies.map((movie, idx) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} idx={idx} />
      ))}
    </div>
  );
}
