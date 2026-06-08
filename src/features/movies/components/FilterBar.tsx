import { SearchInput } from '@/features/movies/components/SearchInput';
import { SortSelect } from '@/features/movies/components/SortSelect';
import { ChipFilters } from '@/features/movies/components/GenreFilters';

export function FilterBar() {
  return (
    <form
      className="flex flex-col gap-4 p-4 font-semibold"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchInput />
        <SortSelect />
      </div>
      <ChipFilters />
    </form>
  );
}
