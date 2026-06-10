import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Button } from '@/shared/components/ui/Button';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { useShallow } from 'zustand/shallow';

export function GenreFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { genres, fetchGenres, error } = useMoviesStore(
    useShallow((state) => ({
      genres: state.genres,
      fetchGenres: state.fetchGenres,
      error: state.genresError,
    }))
  );
  const selectedGenre = searchParams.get('genre');

  const handleClick = (genre: string) => {
    if (selectedGenre === genre) {
      return setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.delete('genre');
        return next;
      });
    }
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('genre', genre);
      return next;
    });
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
                selectedGenre === genre?.name.toLowerCase()
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
