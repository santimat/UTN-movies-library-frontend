import { useEffect, useState, type ChangeEvent } from 'react';
import { ArrowDownIcon } from '@/components/icons/ArrowDown';
import { type Movie } from '@/types/entities/Movie';
import { SortAscending } from '@/components/icons/SortAscending';
import { SortDescending } from '../icons/SortDescending';
import { useSearchParams } from 'react-router';

export function SortSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<keyof Movie | 'all'>(
    (searchParams.get('sortBy') as keyof Movie) || 'all'
  );
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>(
    (searchParams.get('sortOrder') as 'ASC' | 'DESC') || 'ASC'
  );
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as keyof Movie | 'all';
    setSortBy(value);
  };

  const handleClick = () => {
    setSortOrder((prev) => (prev === 'ASC' ? 'DESC' : 'ASC'));
  };

  useEffect(() => {
    if (sortBy === 'all') {
      return setSearchParams((prev) => {
        prev.delete('sortBy');
        prev.set('sortOrder', sortOrder);
        return prev;
      });
    }

    setSearchParams((prev) => {
      prev.set('sortBy', sortBy);
      prev.set('sortOrder', sortOrder);
      return prev;
    });
  }, [sortBy, sortOrder, setSearchParams]);

  return (
    <>
      <label className="relative shadow-auth md:w-60">
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
          defaultValue="sort"
          aria-label="Filtro de ordenamiento"
          className="peer w-full border-2 border-neutral p-1 uppercase"
        >
          <option disabled value={'sort'}>
            Ordenar por
          </option>
          <option value={''}>Todos</option>
          <option value={'title'}>Titulo</option>
          <option value={'genre'}>Genero</option>
          <option value={'averageRating'}>Rating</option>
          <option value={'year'}>Año</option>
        </select>
      </label>
      <button
        onClick={handleClick}
        className="cursor-pointer border-2 border-neutral shadow-auth"
      >
        {sortOrder === 'ASC' ? (
          <SortAscending className="pointer-events-none stroke-neutral" />
        ) : (
          <SortDescending className="pointer-events-none stroke-neutral" />
        )}
      </button>
    </>
  );
}
