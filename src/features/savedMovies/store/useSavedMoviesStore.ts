import type { Movie } from '@/shared/types';
import { create } from 'zustand';
import { savedMoviesService } from '@/features/savedMovies/services/savedMoviesService';
import type { GetSavedMoviesProps } from '@/features/savedMovies/types';

type UseSavedMoviesState = {
  savedMovies: Movie[];
  data: {
    currentPage: number;
    totalPages: number;
    totalElements: number;
  };
  fetchSavedMovies: (filters: GetSavedMoviesProps) => Promise<void>;
  saveMovieInMyList: (movieId: number) => Promise<void>;
};

export const useSavedMoviesStore = create<UseSavedMoviesState>((set) => ({
  savedMovies: [],
  data: {
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
  },
  fetchSavedMovies: async (filters: GetSavedMoviesProps) => {
    const { savedMovies, ...data } =
      await savedMoviesService.fetchSavedMovies(filters);
    set({ savedMovies: savedMovies, data });
  },
  saveMovieInMyList: async (movieId: number) => {
    await savedMoviesService.saveMovieInMyList(movieId);
  },
}));
