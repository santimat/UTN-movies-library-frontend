import { API_URL } from '@/shared/utils/constants';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
import { type GetMoviesProps } from '@/features/movies/types';

const URL_BASE = `${API_URL}/movies`;

export const movieService = {
  getMovies: async (filters: GetMoviesProps) => {
    const url = new URL(URL_BASE);
    Object.entries(filters).forEach(([key, value]) => {
      if (value)
        url.searchParams.append(
          key,
          key === 'page' ? String(+value - 1) : String(value)
        );
    });

    try {
      const res = await fetch(url);
      handleResponseErrors(res);
      const data: SpringPageResponse = await res.json();

      return {
        movies: data.content,
        currentPage: data.page.number + 1,
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
  createMovie: async (movieData: FormData) => {
    try {
      const res = await fetch(URL_BASE, {
        method: 'POST',
        credentials: 'include',
        body: movieData,
      });
      handleResponseErrors(res);
      const data = await res.json();
      return data;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  updateMovie: async (movieData: FormData, id: number) => {
    try {
      const res = await fetch(`${URL_BASE}/${id}`, {
        method: 'PUT',
        credentials: 'include',
        body: movieData,
      });
      handleResponseErrors(res);

      const data = await res.json();
      return data;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
