import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
export function MovieFeedback({ movieId }: { movieId: number }) {
  return (
    <section className="mx-auto grid w-[95%] gap-10 px-4 font-headline font-bold text-neutral md:w-[80%] lg:grid-cols-2">
      <ReviewList movieId={movieId} />
      <ReviewForm />
    </section>
  );
}
