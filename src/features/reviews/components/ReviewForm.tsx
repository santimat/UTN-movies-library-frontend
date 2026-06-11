import { useId, useState, type SubmitEvent } from 'react';
import { RatingInput } from '@/features/reviews/components/RatingInput';
import { Button } from '@/shared/components/ui/Button';
import { useAuthStore } from '@/features/auth/store/useAuthStore';

export function ReviewForm() {
  const user = useAuthStore((s) => s.user);
  const commentId = useId();
  const [rating, setRating] = useState<number>(0);
  const handleClickStars = (newRating: number) => {
    setRating((prevRating) => (prevRating === newRating ? 0 : newRating));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    // TODO: send formData to backend
  };

  if (!user?.email) return null;

  return (
    <div className="mx-auto w-full border-2 border-neutral bg-neutral/20 p-4 shadow-auth xl:w-125">
      <h2 className="mb-4 text-left text-3xl uppercase">Deja tu reseña</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <RatingInput onClick={handleClickStars} rating={rating} />

        <div>
          <label htmlFor={commentId} className="block text-xl">
            Comentario
          </label>
          <textarea
            className="w-full border-2 border-neutral p-2"
            rows={10}
          ></textarea>
        </div>
        <Button className="bg-neutral/15 text-black uppercase">
          Enviar reseña
        </Button>
      </form>
    </div>
  );
}
