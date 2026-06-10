import { API_URL } from '@/shared/utils/constants';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';

const BASE_URL = `${API_URL}/movies/reviews`;

export const reviewService = {
  getReviewsByMovieId: async (movieId: number) => {
    try {
      const res = await fetch(`${BASE_URL}/${movieId}`);
      handleResponseErrors(res);

      const data: SpringPageResponse = await res.json();
      if (!data.page.totalElements)
        throw {
          code: 'NO_REVIEWS',
          error: 'No se encontraron reseñas para esta película',
        };

      return data.content;
    } catch (error) {
      handleFetchErrors(error);
    }
  },
};
