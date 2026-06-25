import type { Movie } from '@/shared/types';
import { create } from 'zustand';

type useMovieManagementState = {
  movieForm: Movie | null;
  setMovieForm: (updatedFields: Partial<Movie> | null) => void;
};

export const useMovieManagementStore = create<useMovieManagementState>(
  (set, get) => ({
    movieForm: null,
    setMovieForm: (updatedFields: Partial<Movie> | null) => {
      const prevMovie = get().movieForm;

      if (!updatedFields) return set({ movieForm: null });
      set({ movieForm: { ...prevMovie, ...updatedFields } as Movie });
    },
  })
);
