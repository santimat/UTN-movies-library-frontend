import { create } from 'zustand';
import { type Genre, type GetMoviesProps } from '@/features/movies/types';
import { type Movie } from '@/shared/types';
import { movieService } from '@/features/movies/services/movieService';
import type { AppError } from '@/shared/types';

interface UseMoviesState {
  movies: Movie[];
  movie: Movie | null;
  genres: Genre[];
  moviesError: AppError | null;
  genresError: AppError | null;
  moviesLoading: boolean;
  genresLoading: boolean;
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
  fetchGenres: () => void;
}

export const useMoviesStore = create<UseMoviesState>((set, get) => ({
  movies: [],
  movie: null,
  moviesLoading: true,
  moviesError: null,
  data: {
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
  },
  genres: [],
  genresError: null,
  genresLoading: true,
  fetchMovies: async (filters: GetMoviesProps) => {
    try {
      const { movies, ...data } = await movieService.getMovies(filters);
      set({
        movies,
        data,
        moviesLoading: false,
      });
    } catch (error) {
      set({ moviesError: error as AppError, moviesLoading: false });
    }
  },
  fetchMovieById: async (id: number) => {
    const { movies } = get();
    const movie = movies.find((m) => m.id === id);

    if (movie) {
      return set({ movie, moviesLoading: false });
    }
    try {
      const movie = await movieService.getMovieById(id);
      set({ movie, moviesLoading: false });
    } catch (error) {
      set({ moviesError: error as AppError, moviesLoading: false });
    }
  },
  fetchGenres: async () => {
    if (get().genres.length) return;
    try {
      const genres = await movieService.getGenres();
      set({ genres, genresLoading: false });
    } catch (error) {
      set({ genresError: error as AppError, genresLoading: false });
    }
  },
}));
