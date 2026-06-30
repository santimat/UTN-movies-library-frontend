import { create } from 'zustand';
import type { Movie } from '@/shared/types';
import { savedMoviesService } from '@/features/savedMovies/services/savedMoviesService';
import type { GetSavedMoviesProps } from '@/features/savedMovies/types';

type UseSavedMoviesState = {
  savedMovies: Movie[];
  totalSavedMovies: number;
  randomSavedMovie: Movie | null;
  data: {
    currentPage: number;
    totalPages: number;
  };
  fetchSavedMovies: (filters: GetSavedMoviesProps) => Promise<void>;
  saveMovieInMyList: (movieId: number) => Promise<void>;
  fetchRandomSavedMovie: () => Promise<void>;
  deleteSavedMovie: (movieId: number) => Promise<void>;
  countSavedMovies: () => Promise<void>;
};

export const useSavedMoviesStore = create<UseSavedMoviesState>((set, get) => ({
  savedMovies: [],
  randomSavedMovie: null,
  totalSavedMovies: 0,
  data: {
    currentPage: 0,
    totalPages: 0,
  },
  fetchSavedMovies: async (filters: GetSavedMoviesProps) => {
    const { savedMovies, ...data } =
      await savedMoviesService.getSavedMovies(filters);
    set({ savedMovies: savedMovies, data });
  },
  saveMovieInMyList: async (movieId: number) => {
    await savedMoviesService.saveMovieInMyList(movieId);
  },
  fetchRandomSavedMovie: async () => {
    const randomSavedMovie = await savedMoviesService.getRandomSavedMovie();
    set({ randomSavedMovie });
  },
  deleteSavedMovie: async (movieId: number) => {
    await savedMoviesService.deleteSavedMovie(movieId);
    await get().countSavedMovies();

    set((state) => {
      const updatedSavedMovies = state.savedMovies.filter(
        (movie) => movie.id !== movieId
      );
      return { savedMovies: updatedSavedMovies };
    });
  },
  countSavedMovies: async () => {
    try {
      const { totalSavedMovies } = await savedMoviesService.countSavedMovies();
      set({ totalSavedMovies });
    } catch {
      set({ totalSavedMovies: 0 });
    }
  },
}));
