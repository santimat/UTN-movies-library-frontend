import { useShallow } from 'zustand/shallow';
import { useGenresStore } from '@/features/genres/store/useGenresStore';
import { useEffect } from 'react';

export function useGenres() {
  const { genres, fetchGenres, error } = useGenresStore(
    useShallow((s) => ({
      genres: s.genres,
      fetchGenres: s.fetchGenres,
      error: s.error,
    }))
  );

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  return { genres, error };
}
