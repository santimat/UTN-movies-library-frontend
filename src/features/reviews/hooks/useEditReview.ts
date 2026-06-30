import { useShallow } from 'zustand/shallow';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';

export function useEditReview() {
  const { editingReview, setEditingReview, updateReview } = useReviewsStore(
    useShallow((s) => ({
      editingReview: s.editingReview,
      setEditingReview: s.setEditingReview,
      updateReview: s.updateReview,
    }))
  );

  const resetEditingReview = () => {
    setEditingReview({
      rating: 0,
      comment: '',
      id: 0,
    });
  };

  return {
    editingReview,
    setEditingReview,
    updateReview,
    resetEditingReview,
  };
}
