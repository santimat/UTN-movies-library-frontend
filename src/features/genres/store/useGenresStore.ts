import { create } from 'zustand';
import { genreService } from '@/features/genres/services/genreService';
import type { AppError } from '@/shared/types';
import type { Genre } from '@/features/movies/types';

type UseGenresStoreState = {
  genres: Genre[];
  loading: boolean;
  error: AppError | null;
  fetchGenres: () => void;
  createGenre: (name: string) => Promise<void>;
};

export const useGenresStore = create<UseGenresStoreState>((set, get) => ({
  genres: [],
  loading: true,
  error: null,
  fetchGenres: async () => {
    if (get().genres.length) return;

    try {
      const genres = await genreService.getGenres();
      set({ genres, loading: false });
    } catch (error) {
      set({ error: error as AppError, loading: false });
    }
  },
  createGenre: async (name: string) => {
    const genre = await genreService.createGenre(name);
    set((state) => ({ genres: [...state.genres, genre] }));
  },
}));
