import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import type { DEFAULT_MOVIE_FILTERS } from '@/shared/utils/constants';

export function useMovies(filters?: typeof DEFAULT_MOVIE_FILTERS, limit = '3') {
  const { movies, fetchMovies, loading, error, currentPage, totalPages } =
    useMoviesStore(
      useShallow((state) => ({
        movies: state.movies,
        fetchMovies: state.fetchMovies,
        loading: state.loading,
        error: state.error,
        totalPages: state.data.totalPages,
        currentPage: state.data.currentPage,
      }))
    );

  useEffect(() => {
    fetchMovies({
      ...filters,
      size: limit,
    });
  }, [filters, fetchMovies, limit]);

  return {
    movies,
    loading,
    error,
    totalPages,
    currentPage,
  };
}
