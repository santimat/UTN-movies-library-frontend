import { useEditReview } from '@/features/reviews/hooks/useEditReview';
import { useSavedMoviesActions } from '@/features/savedMovies/hooks/useSavedMoviesActions';
import { StarIcon } from '@/shared/components/icons/Star';
import { TrashIcon } from '@/shared/components/icons/Trash';
import { Button } from '@/shared/components/ui/Button';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { RatingBadge } from '@/shared/components/ui/RatingBadge';
import type { AppError, Movie } from '@/shared/types';
import { sileo } from 'sileo';

type MovieCardProps = Omit<Movie, 'director' | 'synopsis'> & {
  idx: number;
  isSavedMovie?: boolean;
};

export function MovieCard({
  id,
  title,
  genre,
  releaseYear,
  posterUrl,
  averageRating,
  idx,
  isSavedMovie = false,
}: MovieCardProps & { idx: number }) {
  const { deleteSavedMovie } = useSavedMoviesActions();
  const { resetEditingReview } = useEditReview();
  const showBadge = Number(averageRating) > 0;
  const animationDelay = `${idx * 100}ms`;

  const handleDeleteSavedMovie = async () => {
    try {
      await deleteSavedMovie(id);
      sileo.success({
        title: 'Película eliminada',
        description: 'La película se ha eliminado de tu lista',
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Ha ocurrido un error',
        description: error,
      });
    }
  };

  return (
    <article
      className="group relative flex animate-fade-in-up flex-col border-3 border-neutral text-neutral shadow-auth lg:max-w-100"
      style={{ animationDelay: animationDelay }}
    >
      {isSavedMovie && (
        <Button
          className="absolute top-2 left-2 z-10 bg-secondary p-1! transition-opacity duration-300 xl:opacity-0 xl:group-hover:opacity-100"
          onClick={handleDeleteSavedMovie}
        >
          <TrashIcon className="fill-white" />
        </Button>
      )}
      {showBadge && <RatingBadge content={Number(averageRating).toFixed(1)} />}
      <picture>
        <img
          className="block h-100 w-full object-cover object-top grayscale transition-all duration-500 group-has-hover:grayscale-0"
          src={posterUrl}
          alt={title}
        />
      </picture>
      <footer className="flex flex-1 flex-col justify-between gap-4 p-2">
        <h3 title={title} className="line-clamp-1 font-semibold uppercase">
          {title}
        </h3>
        <div className="flex flex-col justify-end gap-2">
          <div className="flex items-center gap-2 font-semibold text-neutral/60 uppercase">
            <StarIcon className="w-6 fill-tertiary/70 stroke-tertiary/70" />
            <span>{genre}</span>
            <span>&diams;</span>
            <span>{releaseYear}</span>
          </div>
          <ButtonLink
            to={`/movie/${id}`}
            className="block text-center uppercase"
            onClick={resetEditingReview}
          >
            Ver detalles
          </ButtonLink>
        </div>
      </footer>
    </article>
  );
}
