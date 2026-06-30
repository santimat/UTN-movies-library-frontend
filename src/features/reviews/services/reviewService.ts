import { API_URL } from '@/shared/utils/constants';
import type { SpringPageResponse } from '@/shared/types';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
import type { ReviewRequest } from '@/features/reviews/types';

const BASE_URL = `${API_URL}/reviews`;

export const reviewService = {
  getReviewsByMovieId: async (movieId: number) => {
    try {
      const res = await fetch(`${BASE_URL}?movieId=${movieId}`);
      handleResponseErrors(res);
      const data: SpringPageResponse = await res.json();
      if (!data.page.totalElements)
        throw {
          code: 'NO_REVIEWS',
          error: 'No se encontraron reseñas para esta película',
        };

      return data.content;
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  createReview: async (payload: ReviewRequest) => {
    try {
      const res = await fetch(BASE_URL, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      handleResponseErrors(res);
      return await res.json();
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  updateReview: async (updatedReview: ReviewRequest) => {
    try {
      const res = await fetch(`${BASE_URL}/${updatedReview.id}`, {
        credentials: 'include',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReview),
      });
      handleResponseErrors(res);
      return await res.json();
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
