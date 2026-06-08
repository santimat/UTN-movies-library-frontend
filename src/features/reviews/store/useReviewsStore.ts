import { create } from 'zustand';
import { type Review } from '@/features/reviews/types';
import { reviewService } from '@/features/reviews/services/reviewService';

type ReviewsState = {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  fetchReviews: (movieId: number) => Promise<void>;
  loading: boolean;
};

export const useReviewsStore = create<ReviewsState>((set) => ({
  reviews: [],
  loading: true,
  setReviews: (reviews) => set({ reviews }),
  fetchReviews: async (movieId) => {
    try {
      const reviews = await reviewService.getReviewsByMovieId(movieId);
      set({ reviews });
    } catch {
      set({ reviews: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
