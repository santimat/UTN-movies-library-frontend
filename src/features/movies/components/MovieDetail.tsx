import { type Movie } from '@/features/movies/types';

import { Button } from '@/shared/components/ui/Button';
import { PlayIcon } from '@/shared/components/icons/Play';
import { RatingBadge } from '@/shared/components/ui/RatingBadge';
import { MovieMetaItem } from '@/features/movies/components/MovieMetaItem';

import { useAuthStore } from '@/features/auth/store/useAuthStore';
type MovieDetailProps = {
  movie: Movie;
};

export function MovieDetail({ movie }: MovieDetailProps) {
  const { user } = useAuthStore();
  const isAuthenticated = !!user?.email;
  return (
    <article className="mx-auto mt-4 grid gap-6 font-headline font-bold md:grid-cols-2 md:grid-rows-3 md:gap-y-2">
      <div className="md:flex md:flex-col md:justify-center">
        <h1 className="text-5xl uppercase">{movie?.title}</h1>
        <ul className="mt-4 flex gap-4 font-body text-white uppercase">
          <li>
            <span className="border-none bg-neutral p-2">{movie?.year}</span>
          </li>
          <li>
            <span className="border-none bg-tertiary p-2">{movie?.genre}</span>
          </li>
        </ul>
      </div>
      <div className="relative mx-auto md:-order-1 md:row-span-3">
        <RatingBadge content={movie?.averageRating} />
        <img
          src={movie?.posterUrl}
          alt={movie?.title}
          className="w-100 border-3 border-neutral shadow-auth md:w-120"
        />
      </div>
      <div className="mt-4 md:row-span-2 md:mt-0">
        <p className="border-l-4 border-neutral pl-2 font-body text-pretty text-neutral md:text-xl">
          {movie?.synopsis}
        </p>
        <ul className="mt-6 flex items-center gap-4">
          <li className="w-full">
            <MovieMetaItem label="director" value={movie?.director} />
          </li>
          <li className="w-full flex-1">
            <MovieMetaItem label="duración" value={`${movie?.duration} mins`} />
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <a
            className="flex flex-1 items-center justify-center gap-2 border-2 border-neutral bg-secondary p-2 text-xl text-white uppercase transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:scale-95"
            href={movie?.trailerUrl}
            target="_blank"
          >
            <PlayIcon width={24} height={24} />
            Ver trailer
          </a>
          {isAuthenticated && (
            <Button className="bg-neutral/10 uppercase shadow-none">
              Añadir a mi lista +
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
