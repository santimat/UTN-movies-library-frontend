import { create } from 'zustand';
import { type Movie } from '@/types/entities/Movie';
import { movieService } from '@/services/movieService';

interface UseMoviesState {
  movies: Movie[];
  originalMovies: Movie[];
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

export const useMovies = create<UseMoviesState>((set) => ({
  originalMovies: [],
  movies: [],
  data: {},
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
    }
  },
}));
