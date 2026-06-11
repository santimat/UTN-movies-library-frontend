import { create } from 'zustand';
import { type Review, type ReviewRequest } from '@/features/reviews/types';
import { reviewService } from '@/features/reviews/services/reviewService';
import type { AppError } from '@/shared/types';

type ReviewsState = {
  reviews: Review[];
  isLoading: boolean;
  errorReview: AppError | null;
  fetchReviews: (movieId: number) => Promise<void>;
  createReview: (review: ReviewRequest) => Promise<void>;
  isUserReview: (userId: number) => boolean;
};

export const useReviewsStore = create<ReviewsState>((set, get) => ({
  reviews: [],
  isLoading: true,
  errorReview: null,
  fetchReviews: async (movieId) => {
    try {
      const reviews = await reviewService.getReviewsByMovieId(movieId);
      set({ reviews, isLoading: false });
    } catch {
      set({ reviews: [], isLoading: false });
    }
  },
  createReview: async (review: ReviewRequest) => {
    try {
      const newReview = await reviewService.createReview(review);
      set((state) => ({ reviews: [...state.reviews, newReview] }));
    } catch (error) {
      set({ errorReview: error as AppError, isLoading: false });
    }
  },
  isUserReview: (userId: number) => {
    if (!userId) return false;
    const { reviews } = get();
    return reviews.some((review) => review.userId === userId);
  },
}));
