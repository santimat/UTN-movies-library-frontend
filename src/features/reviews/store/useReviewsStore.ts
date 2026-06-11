import { create } from 'zustand';
import { type Review } from '@/features/reviews/types';
import { reviewService } from '@/features/reviews/services/reviewService';

type ReviewsState = {
  reviews: Review[];
  fetchReviews: (movieId: number) => Promise<void>;
};

export const useReviewsStore = create<ReviewsState>((set) => ({
  reviews: [],
  fetchReviews: async (movieId) => {
    try {
      const reviews = await reviewService.getReviewsByMovieId(movieId);
      set({ reviews });
    } catch {
      set({ reviews: [] });
    }
  },
}));
