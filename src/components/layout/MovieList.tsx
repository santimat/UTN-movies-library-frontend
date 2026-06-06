import { useEffect } from 'react';
import { MovieCard } from '@/components/ui/MovieCard';
import { useMovies } from '@/store/useMovies';
import { useSearchParams } from 'react-router';

export function MovieList() {
  const { movies, fetchMovies } = useMovies();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetchMovies(searchParams.get('genre') ?? undefined);
  }, [fetchMovies, searchParams]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:grid-cols-[repeat(auto-fit,minmax(250px,300px))] md:justify-normal">
      {movies.map((movie) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}
