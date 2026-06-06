import { create } from 'zustand';
import { type Movie } from '@/types/entities/Movie';
import { movieService } from '@/services/movies/movieService';
interface UseMoviesState {
  movies: Movie[];
  data?: {
    totalPages?: number;
    totalElements?: number;
    size?: number;
  };
  fetchMovies: (genre?: string) => void;
}

export const useMovies = create<UseMoviesState>((set) => ({
  movies: [],
  data: {},
  fetchMovies: async (genre?: string) => {
    try {
      const { movies, ...data } = await movieService.getMovies(genre);
      set({ movies: movies });
      set({ data });
    } catch (error) {
      console.error('Error fetching movies:', error);
      return {
        movies: [],
      };
    }
  },
}));
