import { lazy } from 'react';
import { Link, useParams } from 'react-router';

import { Loader } from '@/shared/components/ui/Loader';
import { ArrowBackIcon } from '@/shared/components/icons/ArrowBack';
import { MovieDetail } from '@/features/movies/components/MovieDetail';
import { MovieFeedback } from '@/features/reviews/components/MovieFeedback';
import { useMovieById } from '@/features/movies/hooks/useMovieById';
import { Button } from '@/shared/components/ui/Button';

const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

export function Movie() {
  const { id } = useParams();
  const movieId = Number(id);
  const { movie, loading, error } = useMovieById(movieId);

  if (loading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <>
      <section className="mx-auto px-4 md:w-[80%]">
        <Button
          onClick={() => {
            history.back();
          }}
          className={
            'group flex items-center gap-4 border-none! font-headline text-xl font-bold uppercase shadow-none!'
          }
        >
          <ArrowBackIcon width={24} height={24} />
          <span className="p-2 group-hover:bg-neutral group-hover:text-white">
            Volver a la biblioteca
          </span>
        </Button>
        {/* adding a key react must re-render the component. it is to update the component when the movie changes */}
        <MovieDetail key={movie?.id} movie={movie} />
      </section>
      <div className="mx-auto mt-20 mb-10 h-2 bg-neutral md:w-[80%]"></div>
      <MovieFeedback movieId={movieId} />
    </>
  );
}
