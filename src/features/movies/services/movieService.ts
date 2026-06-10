import { API_URL } from '@/shared/utils/constants';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
const URL_BASE = `${API_URL}/movies`;
import { type GetMoviesProps } from '@/features/movies/types';

export const movieService = {
  getMovies: async (filters: GetMoviesProps) => {
    const url = new URL(URL_BASE);
    Object.entries(filters).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });

    try {
      const res = await fetch(url);
      handleResponseErrors(res);
      const data: SpringPageResponse = await res.json();

      return {
        movies: data.content,
        totalPages: data.page.totalPages,
        totalElements: data.page.totalElements,
      };
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  getMovieById: async (id: number) => {
    try {
      const res = await fetch(`${URL_BASE}/${id}`);
      handleResponseErrors(res);

      const data = await res.json();
      return data;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  getGenres: async () => {
    try {
      const res = await fetch(`${API_URL}/genres`);
      handleResponseErrors(res);
      const { content: genres } = await res.json();
      return genres;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
