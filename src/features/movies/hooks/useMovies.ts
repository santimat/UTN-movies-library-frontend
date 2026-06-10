import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';

export function useMovies() {
  const { genre, sortBy, sortOrder, searchText, page } = useMovieSearchParams();
  const { movies, fetchMovies, loading, error } = useMoviesStore(
    useShallow((state) => ({
      movies: state.movies,
      fetchMovies: state.fetchMovies,
      loading: state.moviesLoading,
      error: state.moviesError,
    }))
  );

  useEffect(() => {
    fetchMovies({ genre, sortBy, sortOrder, searchText, page });
  }, [searchText, genre, sortBy, sortOrder, fetchMovies, page]);

  return { movies, loading, error };
}
