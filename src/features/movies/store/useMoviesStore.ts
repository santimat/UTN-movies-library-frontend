import { create } from 'zustand';
import { type Movie, type Genre } from '@/features/movies/types';
import { movieService } from '@/features/movies/services/movieService';
import type { AppError } from '@/shared/types';

interface UseMoviesState {
  movies: Movie[];
  movie: Movie | null;
  genres: Genre[];
  originalMovies: Movie[];
  error: AppError | null;
  loading: boolean;
  data?: {
    totalPages?: number;
    totalElements?: number;
    size?: number;
  };
  fetchMovies: ({
    genre,
    sortBy,
    sortOrder,
    searchText,
  }: {
    genre?: string;
    sortBy?: keyof Movie;
    sortOrder?: 'ASC' | 'DESC';
    searchText?: string;
  }) => void;
  fetchMovieById: (id: number) => void;
}

export const useMoviesStore = create<UseMoviesState>((set) => ({
  originalMovies: [],
  movies: [],
  movie: null,
  genres: [],
  data: {},
  error: null,
  loading: true,
  fetchMovies: async ({ genre, sortBy, sortOrder, searchText }) => {
    try {
      const { movies, ...data } = await movieService.getMovies(
        genre,
        sortBy,
        sortOrder,
        searchText
      );

      set({ movies: movies });
      set({ originalMovies: movies });
      set({ data });
    } catch (error) {
      set({ error: error as AppError });
    } finally {
      set({ loading: false });
    }
  },
  fetchMovieById: async (id: number) => {
    try {
      const movie = await movieService.getMovieById(id);
      set({ movie });
    } catch (error) {
      set({ error: error as AppError });
    } finally {
      set({ loading: false });
    }
  },
}));
