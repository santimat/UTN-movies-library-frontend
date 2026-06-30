import { API_URL } from '@/shared/utils/constants';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
import type { GetSavedMoviesProps } from '@/features/savedMovies/types';

const BASE_URL = `${API_URL}/savedmovies`;

export const savedMoviesService = {
  getSavedMovies: async (filters: GetSavedMoviesProps) => {
    try {
      const url = new URL(BASE_URL);
      Object.entries(filters).forEach(([key, value]) => {
        url.searchParams.append(
          key,
          key === 'page' ? String(+value - 1) : value
        );
      });
      const res = await fetch(url, {
        credentials: 'include',
      });
      handleResponseErrors(res);
      const { content, page } = await res.json();
      return {
        savedMovies: content,
        totalPages: page.totalPages,
        currentPage: page.currentPage + 1,
      };
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  getRandomSavedMovie: async () => {
    try {
      const res = await fetch(`${BASE_URL}/random`, {
        credentials: 'include',
      });
      handleResponseErrors(res);
      const randomSavedMovie = await res.json();
      return randomSavedMovie;
    } catch (error) {
      handleFetchErrors(error);
    }
  },
  saveMovieInMyList: async (movieId: number) => {
    try {
      const res = await fetch(`${BASE_URL}`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ movieId }),
      });
      handleResponseErrors(res);
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  deleteSavedMovie: async (movieId: number) => {
    try {
      const res = await fetch(`${BASE_URL}/${movieId}`, {
        credentials: 'include',
        method: 'DELETE',
      });
      handleResponseErrors(res);
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  countSavedMovies: async () => {
    try {
      const res = await fetch(`${BASE_URL}/count`, {
        credentials: 'include',
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
