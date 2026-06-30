import { create } from 'zustand';
import { type Review, type ReviewRequest } from '@/features/reviews/types';
import { reviewService } from '@/features/reviews/services/reviewService';
import type { AppError } from '@/shared/types';
import { INIT_REVIEW } from '@/shared/utils/constants';

type ReviewsState = {
  reviews: Review[];
  editingReview: Omit<ReviewRequest, 'movieId'>;
  isLoading: boolean;
  errorReview: AppError | null;
  fetchReviews: (movieId: number) => Promise<void>;
  createReview: (review: ReviewRequest) => Promise<void>;
  updateReview: (review: ReviewRequest) => Promise<void>;
  isUserReview: (userId: number) => boolean;
  setEditingReview: (updatedEditingReview: Partial<ReviewRequest>) => void;
};

export const useReviewsStore = create<ReviewsState>((set, get) => ({
  reviews: [],
  isLoading: true,
  errorReview: null,
  editingReview: INIT_REVIEW,
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
      set((state) => ({ reviews: [newReview, ...state.reviews] }));
    } catch (error) {
      set({ errorReview: error as AppError, isLoading: false });
    }
  },
  updateReview: async (review: ReviewRequest) => {
    try {
      const updatedReview = await reviewService.updateReview(review);
      set((state) => ({
        reviews: state.reviews.map((review) =>
          review.movieId === updatedReview.movieId ? updatedReview : review
        ),
      }));
    } catch (error) {
      set({ errorReview: error as AppError, isLoading: false });
    }
  },
  isUserReview: (userId: number) => {
    if (!userId) return false;
    const { reviews } = get();
    return reviews.some((review) => review.userId === userId);
  },
  setEditingReview: (updatedEditingReview: Partial<ReviewRequest>) => {
    const prevEditingReview = get().editingReview;
    set({
      editingReview: {
        ...prevEditingReview,
        ...updatedEditingReview,
      },
    });
  },
}));
