import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useSavedMoviesStore } from '@/features/savedMovies/store/useSavedMoviesStore';

export function useSavedMovies(filters: Record<string, string>, limit = '5') {
  const {
    savedMovies,
    fetchSavedMovies,
    currentPage,
    totalPages,
    countSavedMovies,
    totalSavedMovies,
  } = useSavedMoviesStore(
    useShallow((s) => ({
      savedMovies: s.savedMovies,
      fetchSavedMovies: s.fetchSavedMovies,
      currentPage: s.data.currentPage,
      totalPages: s.data.totalPages,
      countSavedMovies: s.countSavedMovies,
      totalSavedMovies: s.totalSavedMovies,
    }))
  );

  const isSavedMovie = (movieId: number) => {
    return savedMovies.some((movie) => movie.id === movieId);
  };

  useEffect(() => {
    fetchSavedMovies({ ...filters, size: limit });
  }, [fetchSavedMovies, filters, limit]);

  useEffect(() => {
    countSavedMovies();
  }, [countSavedMovies]);

  return {
    savedMovies,
    currentPage,
    totalPages,
    isSavedMovie,
    totalSavedMovies,
  };
}
