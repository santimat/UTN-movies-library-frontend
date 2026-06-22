import type { Movie } from '@/shared/types';
import { create } from 'zustand';

type useMovieManagementState = {
  movieForm: Movie | null;
  setMovieForm: (updatedFields: Partial<Movie>) => void;
};

export const useMovieManagementStore = create<useMovieManagementState>(
  (set, get) => ({
    movieForm: null,
    setMovieForm: (updatedFields: Partial<Movie>) => {
      const prevMovie = get().movieForm;
      set({ movieForm: { ...prevMovie, ...updatedFields } as Movie });
    },
  })
);
