import { useEffect } from 'react';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';
import { Loader } from '@/shared/components/ui/Loader';
import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
export function MovieFeedback({ movieId }: { movieId: number }) {
  const fetchReviews = useReviewsStore((state) => state.fetchReviews);
  const reviews = useReviewsStore((state) => state.reviews);
  const loading = useReviewsStore((state) => state.loading);

  useEffect(() => {
    const getReviews = async () => {
      await fetchReviews(movieId);
    };
    getReviews();
  }, [fetchReviews, movieId]);

  if (loading) return <Loader />;

  return (
    <section className="mx-auto grid w-[95%] px-4 font-headline font-bold md:grid-cols-2">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}
