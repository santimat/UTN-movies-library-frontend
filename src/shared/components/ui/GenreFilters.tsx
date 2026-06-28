import { Button } from '@/shared/components/ui/Button';
import { useGenres } from '@/features/genres/hooks/useGenres';

type GenreFiltersProps = {
  updateGenre: ({ genre, page }: { genre: string; page: string }) => void;
  genre: string;
};
export function GenreFilters({
  updateGenre,
  genre: genreFromFilter,
}: GenreFiltersProps) {
  const { genres, error } = useGenres();

  const handleClick = (genre: string) => {
    if (genreFromFilter === genre) {
      return updateGenre({ genre: '', page: '1' });
    }
    updateGenre({ genre: genre, page: '1' });
  };

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
                genreFromFilter === genre?.name.toLowerCase()
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
