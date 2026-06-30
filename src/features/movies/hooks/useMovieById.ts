import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';

export function useMovieById(movieId: number) {
  const { movie, fetchMovieById, loading, error } = useMoviesStore(
    useShallow((s) => ({
      movie: s.movie,
      fetchMovieById: s.fetchMovieById,
      loading: s.loading,
      error: s.error,
    }))
  );

  useEffect(() => {
    fetchMovieById(movieId);
  }, [fetchMovieById, movieId]);

  return { movie, loading, error };
}
