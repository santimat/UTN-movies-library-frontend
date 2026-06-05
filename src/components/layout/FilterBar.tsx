import { SearchInput } from '@/components/layout/SearchInput';
import { SortSelect } from '@/components/layout/SortSelect';
import { ChipFilters } from './ChipFilters';

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
