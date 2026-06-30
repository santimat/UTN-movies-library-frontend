import { sileo } from 'sileo';
import { lazy, useRef, useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { PlayIcon } from '@/shared/components/icons/Play';
import { RatingBadge } from '@/shared/components/ui/RatingBadge';
import { MovieMetaItem } from '@/features/movies/components/MovieMetaItem';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { useSavedMoviesActions } from '@/features/savedMovies/hooks/useSavedMoviesActions';
import type { AppError, Movie, PlatformUrl } from '@/shared/types';
import { NetflixIcon } from '@/shared/components/icons/Netflix';
import { HboIcon } from '@/shared/components/icons/Hbo';
import { DisneyIcon } from '@/shared/components/icons/Disney';

const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({ default: module.NotFound }))
);

type MovieDetailProps = {
  movie: Movie | null;
  isSavedMovie?: boolean;
};

const PLATFORM_ICONS: Record<PlatformUrl, React.ReactNode> = {
  'https://www.netflix.com': <NetflixIcon />,
  'https://www.hbomax.com': <HboIcon />,
  'https://www.disneyplus.com': <DisneyIcon />,
};

export function MovieDetail({ movie, isSavedMovie = false }: MovieDetailProps) {
  const { saveMovieInMyList } = useSavedMoviesActions();
  const email = useAuthStore((s) => s.user?.email);

  if (!movie) return <NotFound />;

  const isAuthenticated = !!email;

  const getPlatformIcon = (url: string) => {
    const platformOrigin = new URL(url).origin as PlatformUrl;
    return PLATFORM_ICONS[platformOrigin] || null;
  };

  const handleAddToMyList = async () => {
    try {
      await saveMovieInMyList(movie.id);
      sileo.success({
        title: 'Película guardada',
        description: 'La película se ha guardado en tu lista',
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al guardar la película',
        description: error,
      });
    }
  };

  return (
    <article className="mx-auto mt-4 grid gap-6 font-headline font-bold md:grid-cols-2 md:grid-rows-3 md:gap-y-2">
      <div className="md:flex md:flex-col md:justify-center">
        <h1 className="text-5xl uppercase">{movie?.title}</h1>
        <ul className="mt-4 flex gap-4 font-body text-white uppercase">
          <li>
            <span className="border-none bg-neutral p-2">
              {movie?.releaseYear}
            </span>
          </li>
          <li>
            <span className="border-none bg-tertiary p-2">{movie?.genre}</span>
          </li>
        </ul>
      </div>
      <div className="m-auto my-4 flex h-full items-center md:-order-1 md:row-span-3">
        <div className="relative">
          <RatingBadge content={movie?.averageRating} />
          <img
            src={movie?.posterUrl}
            alt={movie?.title}
            className="w-100 border-3 border-neutral shadow-auth md:w-120"
          />
          <img
            src={movie?.posterUrl}
            alt={movie?.title}
            className="absolute inset-0 -z-10 border-3 border-neutral shadow-auth blur-lg"
          />
        </div>
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
        <div className="mt-6 flex flex-col gap-4 lg:flex-row">
          <a
            className="flex flex-1 items-center justify-center gap-2 border-2 border-neutral bg-secondary p-2 text-xl text-white uppercase transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95"
            href={movie?.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon width={24} height={24} />
            Ver trailer
          </a>
          {movie?.watchUrl && (
            <a
              className="flex flex-1 items-center justify-center gap-2 border-2 border-neutral bg-tertiary p-2 text-xl text-white uppercase transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95"
              href={movie.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getPlatformIcon(movie.watchUrl)}
              Ver película
            </a>
          )}
          {isAuthenticated && isSavedMovie && (
            <Button
              className="bg-neutral/20 uppercase shadow-none"
              onClick={handleAddToMyList}
            >
              Añadir a mi lista +
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
