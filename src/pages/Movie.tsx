import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import type { Movie } from '@/features/movies/types';
import { NotFound } from '@/pages/NotFound';
import { Loader } from '@/shared/components/ui/Loader';
import { ArrowBackIcon } from '@/shared/components/icons/ArrowBack';
import { MovieDetail } from '@/features/movies/components/MovieDetail';
import { MovieFeedback } from '@/features/reviews/components/MovieFeedback';

export function Movie() {
  const [error, setError] = useState<string | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const { fetchMovieById, loading } = useMoviesStore();
  const movieId = useLocation().pathname.split('/')[2];

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetchMovieById(Number(movieId));
      if ('error' in res) return setError(res.error);
      setMovie(res);
    };

    fetchMovie();
  }, [setMovie, fetchMovieById, movieId]);

  if (loading) return <Loader />;
  if (error || !movie?.id) return <NotFound />;

  return (
    <>
      <section className="mx-auto w-[95%] px-4">
        <NavLink
          to="/"
          className={
            'group flex items-center gap-4 font-headline text-xl font-bold uppercase'
          }
        >
          <ArrowBackIcon width={24} height={24} />
          <span className="p-2 group-hover:bg-neutral group-hover:text-white">
            Volver a la biblioteca
          </span>
        </NavLink>
        <MovieDetail movie={movie} />
      </section>
      <div className="mx-auto mt-20 mb-10 h-2 w-[95%] bg-neutral"></div>
      <MovieFeedback movieId={movie.id} />
    </>
  );
}
