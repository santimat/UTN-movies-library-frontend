import { ReviewList } from '@/features/reviews/components/ReviewList';
import { ReviewForm } from '@/features/reviews/components/ReviewForm';
import { useReviews } from '../hooks/useReviews';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
export function MovieFeedback({ movieId }: { movieId: number }) {
  const user = useAuthStore((s) => s.user);
  const { alreadyReviewed } = useReviews(user?.id ?? 0);
  return (
    <section className="mx-auto flex flex-col gap-10 p-4 font-headline font-bold text-neutral md:w-[80%] lg:flex-row">
      {!alreadyReviewed && <ReviewForm movieId={movieId} />}
      <ReviewList movieId={movieId} />
    </section>
  );
}
