import { create } from 'zustand';
import { type GetMoviesProps } from '@/features/movies/types';
import { type Movie } from '@/shared/types';
import { movieService } from '@/features/movies/services/movieService';
import type { AppError, MovieRequest } from '@/shared/types';

interface UseMoviesState {
  movies: Movie[];
  movie: Movie | null;
  error: AppError | null;
  loading: boolean;
  data: {
    totalPages: number;
    totalElements: number;
    currentPage: number;
  };
  fetchMovies: ({
    genre,
    sortBy,
    sortOrder,
    searchText,
    page,
  }: GetMoviesProps) => void;
  fetchMovieById: (id: number) => void;
  createMovie: (movieData: MovieRequest) => Promise<void>;
}

export const useMoviesStore = create<UseMoviesState>((set, get) => ({
  movies: [],
  movie: null,
  loading: true,
  error: null,
  data: {
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
  },
  fetchMovies: async (filters: GetMoviesProps) => {
    try {
      const { movies, ...data } = await movieService.getMovies(filters);
      set({
        movies,
        data,
        loading: false,
      });
    } catch (error) {
      set({ error: error as AppError, loading: false });
    }
  },
  fetchMovieById: async (id: number) => {
    const { movies } = get();
    const movie = movies.find((m) => m.id === id);

    if (movie) {
      return set({ movie, loading: false });
    }

    try {
      const movie = await movieService.getMovieById(id);
      set({ movie, loading: false });
    } catch (error) {
      set({ error: error as AppError, loading: false });
    }
  },
  createMovie: async (movieData: MovieRequest) => {
    const newMovie = await movieService.createMovie(movieData);
    set((state) => ({
      movies: [...state.movies, newMovie],
    }));
  },
}));
