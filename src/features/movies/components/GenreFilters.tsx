import { useSearchParams } from 'react-router';
import { Button } from '@/shared/components/ui/Button';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
export function ChipFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movies } = useMoviesStore();
  const selectedGenre = searchParams.get('genre');

  const genres: string[] = [
    ...new Set(movies.map((movie) => movie.genre.toLowerCase())),
  ];

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

  return (
    <ul className="flex scrollbar-thin gap-4 overflow-x-auto p-2">
      {genres.map((genre) => (
        <li key={`chíp-genre-${genre}`}>
          <Button
            onClick={() => handleClick(genre.toLowerCase())}
            className={`hover:cursor px-2 py-0 first-letter:uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${
              selectedGenre?.includes(genre) ? 'bg-neutral text-white' : ''
            } `}
          >
            {genre}
          </Button>
        </li>
      ))}
    </ul>
  );
}
