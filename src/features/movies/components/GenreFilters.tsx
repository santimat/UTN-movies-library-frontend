import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Button } from '@/shared/components/ui/Button';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { useShallow } from 'zustand/shallow';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';

export function GenreFilters() {
  const { updateSearchParam, genre: genreFromParam } = useMovieSearchParams();
  const { genres, fetchGenres, error } = useMoviesStore(
    useShallow((state) => ({
      genres: state.genres,
      fetchGenres: state.fetchGenres,
      error: state.genresError,
    }))
  );

  const handleClick = (genre: string) => {
    if (genreFromParam === genre) {
      return updateSearchParam({ key: 'genre', value: '' });
    }
    updateSearchParam({ key: 'genre', value: genre });
  };

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  return (
    <ul className="flex scrollbar-thin gap-4 overflow-x-auto p-2">
      {error?.code ? (
        <li className="text-red-500">{error.error}</li>
      ) : (
        genres.map((genre) => (
          <li key={`chíp-genre-${genre.id}`}>
            <Button
              onClick={() => handleClick(genre?.name.toLowerCase())}
              className={`px-2 py-0 first-letter:uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${
                genreFromParam === genre?.name.toLowerCase()
                  ? 'bg-neutral text-white'
                  : ''
              } `}
            >
              {genre?.name}
            </Button>
          </li>
        ))
      )}
    </ul>
  );
}
