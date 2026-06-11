import { SearchInput } from '@/features/movies/components/SearchInput';
import { SortSelect } from '@/features/movies/components/SortSelect';
import { GenreFilters } from '@/features/movies/components/GenreFilters';

export function Filters() {
  return (
    <form
      className="mx-auto mb-4 flex w-[95%] flex-col gap-4 font-semibold"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchInput />
        <SortSelect />
      </div>
      <GenreFilters />
    </form>
  );
}
