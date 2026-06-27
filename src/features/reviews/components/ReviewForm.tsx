import { useId, useState, type SubmitEvent } from 'react';
import { RatingInput } from '@/features/reviews/components/RatingInput';
import { Button } from '@/shared/components/ui/Button';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
import { REVIEW_FIELDS } from '@/shared/utils/dictionaries';
import { sileo } from 'sileo';
import { useReviewsStore } from '@/features/reviews/store/useReviewsStore';
import { useShallow } from 'zustand/shallow';

export function ReviewForm({ movieId }: { movieId: number }) {
  const commentId = useId();
  const [rating, setRating] = useState(0);

  const user = useAuthStore((s) => s.user);
  const { createReview, isLoading, alreadyReviewed } = useReviewsStore(
    useShallow((s) => ({
      createReview: s.createReview,
      alreadyReviewed: s.isUserReview(user?.id ?? 0),
      isLoading: s.isLoading,
    }))
  );

  const handleClickStars = (newRating: number) => {
    setRating((prevRating) => (prevRating === newRating ? 0 : newRating));
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const reviewData = {
      rating,
      comment: String(formData.get('comment')),
      movieId,
    };

    const missingFields = getMissingFields(reviewData, REVIEW_FIELDS);
    if (missingFields?.length)
      return sileo.error({
        title: 'Campos incompletos',
        description: `Por favor, completa ${missingFields}`,
      });
    await createReview(reviewData);
    sileo.success({
      title: 'Reseña creada con éxito',
      description: 'Gracias por compartir tu opinión sobre la película.',
    });
    setRating(0);
    form.reset();
  };

  if (!user?.email || alreadyReviewed || isLoading) return null;

  return (
    <div className="mx-auto flex-2 border-2 border-neutral bg-neutral/20 p-4 shadow-auth lg:flex-1 xl:w-125">
      <h2 className="mb-4 text-left text-3xl uppercase">Deja tu reseña</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <RatingInput onClick={handleClickStars} rating={rating} />

        <div>
          <label htmlFor={commentId} className="block text-2xl">
            Comentario
          </label>
          <textarea
            className="w-full border-2 border-neutral p-2 text-xl"
            rows={6}
            name="comment"
          ></textarea>
        </div>
        <Button className="bg-neutral/15 text-black uppercase">
          Enviar reseña
        </Button>
      </form>
    </div>
  );
}
