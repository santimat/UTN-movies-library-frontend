import { type Review } from '@/features/reviews/types';
import { Stars } from '@/features/reviews/components/Stars';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { Button } from '@/shared/components/ui/Button';
import { PenIcon } from '@/shared/components/icons/Pen';
import { useModal } from '@/shared/hooks/useModal';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
import { useEditReview } from '@/features/reviews/hooks/useEditReview';
import { CloseIcon } from '@/shared/components/icons/Close';

const COLORS = ['bg-secondary', 'bg-tertiary', 'bg-neutral', 'bg-gray-900'];

export function FeedBackCard({ review }: { review: Review }) {
  const { openModal, handleClickOutside } = useModal();
  const { setEditingReview } = useEditReview();
  const randomColor = COLORS[review.id % COLORS.length];
  const userId = useAuthStore((s) => s.user?.id);
  const isUserReview = userId === review.userId;

  const handleEdit = () => {
    setEditingReview(review);
    openModal(
      <div
        className="flex h-full w-full items-center justify-center"
        onClick={handleClickOutside}
      >
        <ReviewForm movieId={review.movieId} isEditing={true} />
      </div>
    );
  };

  return (
    <article className="relative w-full border-2 border-neutral p-2 shadow-auth">
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span
            className={`${randomColor} flex h-10 w-10 items-center justify-center border-2 border-neutral text-white uppercase`}
          >
            {review.username.slice(0, 1)}
          </span>
          <h3 className="text-xl font-bold text-neutral first-letter:uppercase">
            {review.username}
          </h3>
        </div>
        <Stars rating={review.rating} />

        {isUserReview && (
          <>
            <Button
              className="absolute right-2 bottom-2 p-1! shadow-none!"
              onClick={handleEdit}
            >
              <PenIcon />
            </Button>
            <small
              className={`absolute -top-4 right-2 text-sm text-neutral/60 ${randomColor} p-2 text-white`}
            >
              Tu reseña
            </small>
          </>
        )}
      </div>
      <p className="mt-4 text-neutral/60 first-letter:uppercase">
        {review.comment}
      </p>
    </article>
  );
}
