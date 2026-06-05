import { useSearchParams } from 'react-router';
import type { MouseEvent } from 'react';

const genresMockup = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Sci-Fi' },
];

export function ChipFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName !== 'BUTTON') return;
    const genre = target.dataset.genre?.toLowerCase();
    if (!genre) return;
    setSearchParams(`?genre=${genre}`);
  };
  const selectedGenre = searchParams.get('genre');

  return (
    <ul
      className="flex scrollbar-thin gap-4 overflow-x-auto pb-2"
      onClick={handleClick}
    >
      {genresMockup.map((genre) => (
        <li key={`genre-chip-${genre.id}`}>
          <button
            data-genre={genre.name}
            className={`hover:cursor border-2 border-neutral px-2 whitespace-nowrap transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95 ${selectedGenre?.includes(genre.name.toLowerCase()) ? 'bg-neutral text-white' : ''}`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
