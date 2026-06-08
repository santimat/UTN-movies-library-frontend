import { API_URL } from '@/shared/utils/constants';
import { type Movie } from '@/features/movies/types';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/features/auth/helpers/helpers';
const URL_BASE = `${API_URL}/movies`;

export const movieService = {
  getMovies: async (
    genre?: string,
    sortBy?: keyof Movie | undefined,
    sortOrder?: 'ASC' | 'DESC',
    searchText?: string
  ) => {
    const url = new URL(URL_BASE);
    if (genre) url.searchParams.append('genre', genre);
    if (sortBy) url.searchParams.append('sortBy', sortBy);
    if (sortOrder) url.searchParams.append('sortOrder', sortOrder);
    if (searchText) url.searchParams.append('searchText', searchText);

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
