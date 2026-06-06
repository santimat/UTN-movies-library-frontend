import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import type { Genre } from '@/types/entities/Genre';
import { genreService } from '@/services/genres/genreService';

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
        <li key={`genre-chip-${genre.id}`}>
          <button
            onClick={() => handleClick(genre.name.toLowerCase())}
            className={`hover:cursor border-2 border-neutral px-2 py-1 whitespace-nowrap uppercase transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${selectedGenre?.includes(genre.name.toLowerCase()) ? 'bg-neutral text-white' : ''}`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
