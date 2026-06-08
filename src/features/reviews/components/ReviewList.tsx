import { FeedBackCard } from '@/features/reviews/components/FeedBackCard';
import { type Review } from '@/features/reviews/types';

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h2 className="text-4xl uppercase">Reseñas</h2>
      {reviews.length ? (
        <ul className="mt-4 flex max-h-100 flex-col gap-6 overflow-y-auto">
          {reviews.map((review) => (
            <li key={`review-movie-${review.id}`}>
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
