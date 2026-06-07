import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { MovieCard } from '@/features/movies/components/MovieCard';
import { Loader } from '@/shared/components/ui/Loader';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { type Movie } from '@/features/movies/types';

export function MovieList() {
  const { movies, fetchMovies, loading } = useMoviesStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.get('genre') || undefined;
    const sortBy = (searchParams.get('sortBy') as keyof Movie) || undefined;
    const sortOrder =
      (searchParams.get('sortOrder') as 'ASC' | 'DESC') || undefined;
    const searchText = searchParams.get('searchText') || undefined;
    fetchMovies({ genre, sortBy, sortOrder, searchText });
  }, [fetchMovies, searchParams]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:justify-normal xl:grid-cols-[repeat(auto-fit,minmax(250px,300px))]">
      {movies.map((movie) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}
