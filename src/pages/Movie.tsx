import { useEffect, lazy } from 'react';
import { Link, useParams } from 'react-router';

import type { Movie } from '@/features/movies/types';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { Loader } from '@/shared/components/ui/Loader';
import { ArrowBackIcon } from '@/shared/components/icons/ArrowBack';
import { MovieDetail } from '@/features/movies/components/MovieDetail';
import { MovieFeedback } from '@/features/reviews/components/MovieFeedback';
import { useShallow } from 'zustand/shallow';

const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

export function Movie() {
  const { fetchMovieById, loading, error } = useMoviesStore(
    useShallow((s) => ({
      fetchMovieById: s.fetchMovieById,
      loading: s.loading,
      error: s.error,
      movie: s.movie,
    }))
  );

  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);

  useEffect(() => {
    fetchMovieById(movieId);
  }, [fetchMovieById, movieId]);

  if (loading) return <Loader />;
  if (error) return <NotFound />;

  return (
    <>
      <section className="mx-auto px-4 md:w-[80%]">
        <Link
          to="/"
          className={
            'group flex items-center gap-4 font-headline text-xl font-bold uppercase'
          }
        >
          <ArrowBackIcon width={24} height={24} />
          <span className="p-2 group-hover:bg-neutral group-hover:text-white">
            Volver a la biblioteca
          </span>
        </Link>
        <MovieDetail />
      </section>
      <div className="mx-auto mt-20 mb-10 h-2 bg-neutral md:w-[80%]"></div>
      <MovieFeedback movieId={movieId} />
    </>
  );
}
