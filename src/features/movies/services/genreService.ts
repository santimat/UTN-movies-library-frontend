import { API_URL } from '@/shared/utils/constants';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';

const URL_BASE = `${API_URL}/genres`;
export const genreService = {
  getGenres: async () => {
    try {
      const res = await fetch(URL_BASE);
      const data: SpringPageResponse = await res.json();
      return { genres: data.content };
    } catch (error) {
      handleFetchErrors(error);
    }
  },
};
