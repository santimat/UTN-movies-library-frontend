import { API_URL } from '@/shared/utils/constants';
import { type Movie } from '@/features/movies/types';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
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
      const data: SpringPageResponse = await res.json();

      if (!data.page.totalElements)
        return {
          movies: [],
        };

      return {
        movies: data.content,
        totalPages: data.page.totalPages,
        totalElements: data.page.totalElements,
      };
    } catch {
      throw new Error('Error fetching movies');
    }
  },
  getMovieById: async (id: number) => {
    try {
      const res = await fetch(`${URL_BASE}/${id}`);
      const data = await res.json();

      if (data.status === 404)
        throw {
          code: 'NOT_FOUND',
          error: `Pelicula con el id ${id} no encontrada`,
        };
      return data;
    } catch (error) {
      handleFetchErrors(error);
    }
  },
};
