import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
export function MovieFeedback({ movieId }: { movieId: number }) {
  return (
    <section className="mx-auto flex w-[95%] flex-col gap-10 px-4 font-headline font-bold text-neutral md:w-[80%] lg:flex-row">
      <ReviewForm movieId={movieId} />
      <ReviewList movieId={movieId} />
    </section>
  );
}
