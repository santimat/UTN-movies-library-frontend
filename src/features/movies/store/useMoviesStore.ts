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
    } catch (error) {
      console.error('Error fetching movies:', error);
      return {
        movies: [],
      };
    } finally {
      set({ loading: false });
    }
  },
}));
