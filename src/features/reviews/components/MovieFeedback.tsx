import { useEffect } from 'react';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';
import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
import { useShallow } from 'zustand/shallow';
export function MovieFeedback({ movieId }: { movieId: number }) {
  const { reviews, fetchReviews } = useReviewsStore(
    useShallow((s) => ({
      reviews: s.reviews,
      fetchReviews: s.fetchReviews,
    }))
  );

  useEffect(() => {
    const getReviews = async () => {
      await fetchReviews(movieId);
    };
    getReviews();
  }, [fetchReviews, movieId]);

  return (
    <section className="mx-auto grid w-[95%] px-4 font-headline font-bold md:grid-cols-2">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}
