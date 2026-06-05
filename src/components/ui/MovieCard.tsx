import { type MovieCardProps } from '@/types/entities/Movie';
import { StarIcon } from '../icons/Star';
import { Button } from './Button';
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
      {showBadge && (
        <span className="absolute top-2 right-2 z-10 border-3 border-neutral bg-secondary px-2 py-1 font-semibold text-white">
          {averageRating.toFixed(1)}
        </span>
      )}
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
          <Button
            href={`/details/${id}`}
            className="block text-center uppercase"
          >
            Ver detalles
          </Button>
        </div>
      </footer>
    </article>
  );
}
