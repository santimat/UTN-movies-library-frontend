import { useShallow } from 'zustand/shallow';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';

export function useReviews(userId: number) {
  const { createReview, isLoading, alreadyReviewed } = useReviewsStore(
    useShallow((s) => ({
      createReview: s.createReview,
      alreadyReviewed: s.isUserReview(userId ?? 0),
      isLoading: s.isLoading,
    }))
  );

  return {
    createReview,
    isLoading,
    alreadyReviewed,
  };
}
