import { lazy, useEffect, useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router';
import { ArrowDownIcon } from '@/shared/components/icons/ArrowDown';
import { SortAscending } from '@/shared/components/icons/SortAscending';
import { type Movie } from '@/features/movies/types';
import { Button } from '@/shared/components/ui/Button';

const SortDescending = lazy(() =>
  import('@/shared/components/icons/SortDescending').then((module) => ({
    default: module.SortDescending,
  }))
);

export function SortSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || 'title';
  const sortOrder = searchParams.get('sortOrder') || 'ASC';
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as keyof Movie;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('sortBy', value);
      return next;
    });
  };

  const handleClick = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const currentSortOrder = next.get('sortOrder');
      const nextSortOrder = currentSortOrder === 'ASC' ? 'DESC' : 'ASC';
      next.set('sortOrder', nextSortOrder);
      return next;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <label className="relative w-full shadow-auth md:w-60">
        <span
          className={`pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 transition-transform ${isSelectOpen && 'rotate-90'}`}
        >
          <ArrowDownIcon className="stroke-neutral" width={24} height={24} />
        </span>
        <select
          onBlur={() => setIsSelectOpen(false)}
          onClick={() => setIsSelectOpen((prev) => !prev)}
          onChange={handleChange}
          name="sort"
          value={sortBy}
          aria-label="Filtro de ordenamiento"
          className="peer w-full border-2 border-neutral p-1 uppercase focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:outline-none"
        >
          <option disabled value={'sort'}>
            Ordenar por
          </option>
          <option value={'title'}>Titulo</option>
          <option value={'genre'}>Genero</option>
          <option value={'averageRating'}>Rating</option>
          <option value={'year'}>Año</option>
        </select>
      </label>
      <Button onClick={handleClick} className="p-0!">
        {sortOrder === 'ASC' ? (
          <SortAscending className="pointer-events-none stroke-neutral" />
        ) : (
          <SortDescending className="pointer-events-none stroke-neutral" />
        )}
      </Button>
    </div>
  );
}
