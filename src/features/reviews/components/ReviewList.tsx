import { FeedBackCard } from '@/features/reviews/components/FeedBackCard';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';
import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';

export function ReviewList({ movieId }: { movieId: number }) {
  const { fetchReviews, reviews } = useReviewsStore(
    useShallow((s) => ({
      fetchReviews: s.fetchReviews,
      reviews: s.reviews,
    }))
  );

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId, fetchReviews]);

  return (
    <div className="lg:-order-1 lg:flex-2">
      <h2 className="text-4xl uppercase">Reseñas</h2>
      {reviews.length ? (
        <ul className="mt-4 flex h-100 flex-col gap-6 overflow-x-hidden overflow-y-auto">
          {reviews.map((review) => (
            <li key={`review-movie-${review.id}`} className="m-1">
              <FeedBackCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Aún no hay reviews para esta pelicula</p>
      )}
    </div>
  );
}
