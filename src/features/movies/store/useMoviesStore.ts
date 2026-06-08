import { create } from 'zustand';
import { type Movie } from '@/features/movies/types';
import { movieService } from '@/features/movies/services/movieService';

interface UseMoviesState {
  movies: Movie[];
  originalMovies: Movie[];
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
  fetchMovieById: (
    id: number
  ) => Promise<Movie | { code: string; error: string }>;
}

export const useMoviesStore = create<UseMoviesState>((set) => ({
  originalMovies: [],
  movies: [],
  data: {},
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
    } catch {
      return {
        movies: [],
      };
    } finally {
      set({ loading: false });
    }
  },
  fetchMovieById: async (id: number) => {
    try {
      const movie = await movieService.getMovieById(id);
      return movie;
    } catch (error) {
      return error;
    } finally {
      set({ loading: false });
    }
  },
}));
