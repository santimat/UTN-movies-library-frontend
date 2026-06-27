import { lazy, useState } from 'react';
import { Button } from '@/shared/components/ui/Button';
import { ArrowDownIcon } from '@/shared/components/icons/ArrowDown';
import { SortAscending } from '@/shared/components/icons/SortAscending';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';
import { SORT_FIELDS } from '@/shared/utils/dictionaries';

const SortDescending = lazy(() =>
  import('@/shared/components/icons/SortDescending').then((module) => ({
    default: module.SortDescending,
  }))
);

export function SortSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { updateSearchParam, sortOrder, sortBy } = useMovieSearchParams();

  const setSortBy = (value: string) => {
    updateSearchParam({ sortBy: value, page: '1' });
  };

  const setSortOrder = () => {
    const value = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    updateSearchParam({ sortOrder: value, page: '1' });
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
          onChange={(event) => setSortBy(event.target.value)}
          name="sort"
          value={sortBy}
          aria-label="Filtro de ordenamiento"
          className="peer w-full border-2 border-neutral p-1 uppercase focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:outline-none"
        >
          {Object.entries(SORT_FIELDS).map(([key, value]) => (
            <option key={`sort-option-${key}`} value={key}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <Button onClick={setSortOrder} className="p-0!">
        {sortOrder === 'ASC' ? (
          <SortAscending className="pointer-events-none stroke-neutral" />
        ) : (
          <SortDescending className="pointer-events-none stroke-neutral" />
        )}
      </Button>
    </div>
  );
}
