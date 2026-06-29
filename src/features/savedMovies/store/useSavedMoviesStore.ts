import type { Movie } from '@/shared/types';
import { create } from 'zustand';

type UseSavedMoviesState = {
  savedMovies: Movie[];
};

export const useSavedMovies = create<UseSavedMoviesState>((set) => ({
  savedMovies: [],
}));
