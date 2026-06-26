import type { MovieRequest } from '@/features/admin/types.d.ts';
import { create } from 'zustand';

type useMovieManagementState = {
  movieForm: MovieRequest | null;
  setMovieForm: (updatedFields: Partial<MovieRequest> | null) => void;
};

export const useMovieManagementStore = create<useMovieManagementState>(
  (set, get) => ({
    movieForm: null,
    setMovieForm: (updatedFields: Partial<MovieRequest> | null) => {
      const prevMovie = get().movieForm;

      if (!updatedFields) return set({ movieForm: null });
      set({ movieForm: { ...prevMovie, ...updatedFields } as MovieRequest });
    },
  })
);
