import { type MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import type { Genre } from '@/types/entities/Genre';
import { genreService } from '@/services/genres/genreService';

export function ChipFilters() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genre');

  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName !== 'BUTTON') return;
    const genre = target.dataset.genre?.toLowerCase();
    if (!genre) return;
    if (searchParams.get('genre')?.includes(genre)) return setSearchParams('');
    setSearchParams(`?genre=${genre}`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const { genres } = await genreService.getGenres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  return (
    <ul
      className="flex scrollbar-thin gap-4 overflow-x-auto p-2"
      onClick={handleClick}
    >
      {genres.map((genre) => (
        <li key={`genre-chip-${genre.id}`}>
          <button
            data-genre={genre.name}
            className={`hover:cursor border-2 border-neutral px-2 whitespace-nowrap transition-transform first-letter:uppercase hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${selectedGenre?.includes(genre.name.toLowerCase()) ? 'bg-neutral text-white' : ''}`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
