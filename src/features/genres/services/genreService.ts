import { API_URL } from '@/shared/utils/constants';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';

const BASE_URL = `${API_URL}/genres`;

export const genreService = {
  getGenres: async () => {
    try {
      const res = await fetch(`${BASE_URL}`);
      handleResponseErrors(res);
      const { content: genres } = await res.json();
      return genres;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
