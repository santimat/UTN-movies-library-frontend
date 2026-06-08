import type { SpringPageResponse } from '@/shared/types';
import { API_URL } from '@/shared/utils/constants';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';

const BASE_URL = `${API_URL}/movies/reviews`;

export const reviewService = {
  getReviewsByMovieId: async (movieId: number) => {
    try {
      const res = await fetch(`${BASE_URL}/${movieId}`);
      const data: SpringPageResponse = await res.json();
      if (!data.page.totalElements)
        throw {
          code: 'NO_REVIEWS',
          error: 'No se hayaron reseñas para esta película',
        };

      return data.content;
    } catch (error) {
      handleFetchErrors(error);
    }
  },
};
