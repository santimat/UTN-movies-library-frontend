import { type Review } from '@/features/reviews/types';
import { Stars } from '@/features/reviews/components/Stars';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

const COLORS = ['bg-secondary', 'bg-tertiary', 'bg-neutral', 'bg-gray-900'];

export function FeedBackCard({ review }: { review: Review }) {
  const randomColor = COLORS[review.id % COLORS.length];
  const userId = useAuthStore((s) => s.user?.id);
  const isUserReview = userId === review.userId;

  return (
    <article className="w-full border-2 border-neutral p-2 shadow-auth">
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
          <small className="text-sm text-neutral/60">Tu reseña</small>
        )}
      </div>
      <p className="mt-4 text-neutral/60 first-letter:uppercase">
        {review.comment}
      </p>
    </article>
  );
}
