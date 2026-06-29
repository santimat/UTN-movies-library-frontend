import { API_URL } from '@/shared/utils/constants';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';

const BASE_URL = `${API_URL}/savedmovies`;

export const savedMoviesService = {
  fetchSavedMovies: async () => {
    try {
      const res = await fetch(BASE_URL, {
        credentials: 'include',
      });
      handleResponseErrors(res);
      const { content } = await res.json();
      return {
        savedMovies: content,
      };
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
