import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useSavedMoviesStore } from '@/features/savedMovies/store/useSavedMoviesStore';

export function useSavedMovies(filters: Record<string, string>, limit = '5') {
  const {
    savedMovies,
    fetchSavedMovies,
    currentPage,
    totalPages,
    totalElements,
  } = useSavedMoviesStore(
    useShallow((s) => ({
      savedMovies: s.savedMovies,
      fetchSavedMovies: s.fetchSavedMovies,
      currentPage: s.data.currentPage,
      totalPages: s.data.totalPages,
      totalElements: s.data.totalElements,
    }))
  );

  useEffect(() => {
    fetchSavedMovies({ ...filters, size: limit });
  }, [fetchSavedMovies, filters, limit]);

  return {
    savedMovies,
    currentPage,
    totalPages,
    totalElements,
  };
}
