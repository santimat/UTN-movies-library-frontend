import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { genreService } from '@/features/movies/services/genreService';
import { Chip } from '@/shared/components/ui/Chip';
export function ChipFilters() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
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
    const fetchGenres = async () => {
      const { genres } = await genreService.getGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  return (
    <ul className="flex scrollbar-thin gap-4 overflow-x-auto p-2">
      {genres.map((genre) => (
        <li key={`chíp-genre-${genre.id}`}>
          <Chip
            onClick={() => handleClick(genre.name.toLowerCase())}
            className={`hover:cursor hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${
              selectedGenre?.includes(genre.name.toLowerCase())
                ? 'bg-neutral text-white'
                : ''
            } `}
            text={genre.name}
          />
        </li>
      ))}
    </ul>
  );
}
