import { useEffect } from 'react';
import { MovieCard } from '@/components/ui/MovieCard';
import { useMovies } from '@/store/useMovies';
import { useSearchParams } from 'react-router';
import { type Movie } from '@/types/entities/Movie';

export function MovieList() {
  const { movies, fetchMovies } = useMovies();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.get('genre') || undefined;
    const sortBy = (searchParams.get('sortBy') as keyof Movie) || undefined;
    const sortOrder =
      (searchParams.get('sortOrder') as 'ASC' | 'DESC') || undefined;
    const searchText = searchParams.get('searchText') || undefined;
    fetchMovies({ genre, sortBy, sortOrder, searchText });
  }, [fetchMovies, searchParams]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:justify-normal xl:grid-cols-[repeat(auto-fit,minmax(250px,300px))]">
      {movies.map((movie) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}
