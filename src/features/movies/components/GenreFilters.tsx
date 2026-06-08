import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Button } from '@/shared/components/ui/Button';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
export function ChipFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { genres, fetchGenres, error } = useMoviesStore();
  const selectedGenre = searchParams.get('genre');

  const handleClick = (genre: string) => {
    if (selectedGenre == genre) {
      return setSearchParams((prev) => {
        prev.delete('genre');
        return prev;
      });
    }
    setSearchParams((prev) => {
      prev.set('genre', genre);
      return prev;
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
              className={`hover:cursor px-2 py-0 first-letter:uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${
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
