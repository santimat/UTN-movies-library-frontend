import { type MovieCardProps } from '@/features/movies/types';
import { RatingBadge } from '@/shared/components/ui/RatingBadge';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { StarIcon } from '@/shared/components/icons/Star';
export function MovieCard({
  id,
  title,
  genre,
  year,
  posterUrl,
  averageRating,
}: MovieCardProps) {
  const showBadge = averageRating > 0;
  return (
    <article className="group relative flex animate-blurred-fade-in flex-col border-3 border-neutral text-neutral shadow-auth">
      {showBadge && <RatingBadge content={averageRating.toFixed(1)} />}
      <picture>
        <img
          className="block h-100 w-full object-cover object-top grayscale transition-all duration-500 group-has-hover:grayscale-0"
          src={posterUrl}
          alt={title}
        />
      </picture>
      <footer className="flex flex-1 flex-col justify-between gap-4 p-2">
        <h3 className="line-clamp-2 font-semibold uppercase">{title}</h3>
        <div className="flex flex-col justify-end gap-2">
          <div className="flex items-center gap-2 font-semibold text-neutral/60 uppercase">
            <span>
              <StarIcon className="w-6 fill-tertiary/70 stroke-tertiary/70" />
            </span>
            <span>{genre}</span>
            <span>&diams;</span>
            <span>{year}</span>
          </div>
          <ButtonLink
            href={`/movie/${id}`}
            className="block text-center uppercase"
          >
            Ver detalles
          </ButtonLink>
        </div>
      </footer>
    </article>
  );
}
