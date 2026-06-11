import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
export function MovieFeedback({ movieId }: { movieId: number }) {
  return (
    <section className="mx-auto grid w-[95%] px-4 font-headline font-bold md:grid-cols-2">
      <ReviewList movieId={movieId} />
      <ReviewForm />
    </section>
  );
}
