import { useId, type SubmitEvent } from 'react';
import { sileo } from 'sileo';
import { RatingInput } from '@/features/reviews/components/RatingInput';
import { Button } from '@/shared/components/ui/Button';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
import { REVIEW_FIELDS } from '@/shared/utils/dictionaries';
import { useReviews } from '@/features/reviews/hooks/useReviews';
import { useEditReview } from '@/features/reviews/hooks/useEditReview';
import { useModal } from '@/shared/hooks/useModal';
import { CloseIcon } from '@/shared/components/icons/Close';

export function ReviewForm({
  movieId,
  isEditing = false,
}: {
  movieId: number;
  isEditing?: boolean;
}) {
  const commentId = useId();
  const user = useAuthStore((s) => s.user);
  const { alreadyReviewed, createReview, isLoading } = useReviews(
    user?.id ?? 0
  );
  const { editingReview, setEditingReview, updateReview } = useEditReview();
  const { closeModal } = useModal();
  const handleClickStars = (newRating: number) => {
    setEditingReview({ rating: newRating });
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const reviewData = {
      ...editingReview,
      movieId,
    };

    const missingFields = getMissingFields(reviewData, REVIEW_FIELDS);
    if (missingFields?.length)
      return sileo.error({
        title: 'Campos incompletos',
        description: `Por favor, completa ${missingFields}`,
      });
    if (isEditing) {
      await updateReview(reviewData);
      sileo.success({
        title: 'Reseña Actulizada con éxito',
        description: 'Su reseña ha sido actualizada correctamente.',
      });
    } else {
      await createReview(reviewData);
      sileo.success({
        title: 'Reseña creada con éxito',
        description: 'Gracias por compartir tu opinión sobre la película.',
      });
    }
    form.reset();
    closeModal();
  };

  if (!user?.email || (alreadyReviewed && !editingReview.id) || isLoading)
    return null;

  return (
    <div
      className={`${!isEditing ? 'bg-neutral/20' : 'bg-white'} relative mx-auto max-w-120 flex-2 border-2 border-neutral p-4 shadow-auth lg:flex-1 xl:w-125`}
    >
      <Button
        className="absolute right-2 bg-secondary! text-white!"
        onClick={closeModal}
      >
        <CloseIcon />
      </Button>
      <h2 className="mb-4 text-left text-3xl uppercase">Deja tu reseña</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <RatingInput onClick={handleClickStars} rating={editingReview.rating} />

        <div>
          <label htmlFor={commentId} className="block text-2xl">
            Comentario
          </label>
          <textarea
            className="w-full border-2 border-neutral p-2 text-xl"
            rows={6}
            name="comment"
            value={editingReview.comment}
            onChange={(e) => setEditingReview({ comment: e.target.value })}
          ></textarea>
        </div>
        <Button
          type="submit"
          className="bg-neutral/15 font-semibold text-black uppercase"
        >
          Enviar reseña
        </Button>
      </form>
    </div>
  );
}
