import { create } from 'zustand';
import type { MovieRequest } from '@/shared/types.ts';
import { initialMovieForm } from '@/shared/utils/constants';

type useMovieManagementState = {
  movieForm: MovieRequest;
  setMovieForm: (updatedFields: Partial<MovieRequest>) => void;
};

export const useMovieManagementStore = create<useMovieManagementState>(
  (set, get) => ({
    movieForm: initialMovieForm,
    setMovieForm: (updatedFields: Partial<MovieRequest>) => {
      const prevMovie = get().movieForm;
      set({ movieForm: { ...prevMovie, ...updatedFields } as MovieRequest });
    },
  })
);
