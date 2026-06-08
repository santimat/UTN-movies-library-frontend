import { useEffect } from 'react';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';
import { FeedBackCard } from '@/features/reviews/components/FeedBackCard';
import { Loader } from '@/shared/components/ui/Loader';
export function MovieFeedback({ movieId }: { movieId: number }) {
  const { fetchReviews, reviews, loading } = useReviewsStore();
  useEffect(() => {
    const getReviews = async () => {
      await fetchReviews(movieId);
    };
    getReviews();
  }, [fetchReviews, movieId]);

  if (loading) return <Loader />;

  return (
    <section className="mx-auto grid w-[95%] px-4 font-headline font-bold md:grid-cols-2">
      <div>
        <h2 className="text-4xl uppercase">Comentarios</h2>
        {reviews.length ? (
          <ul className="mt-4 flex flex-col gap-6">
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
      <div></div>
    </section>
  );
}
