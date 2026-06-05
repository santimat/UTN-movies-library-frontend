import { SearchInput } from '@/components/layout/SearchInput';
import { SortSelect } from '@/components/layout/SortSelect';
import { ChipFilters } from './ChipFilters';

export function FilterBar() {
  return (
    <form
      className="flex flex-col gap-4 p-4 font-semibold sm:max-w-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <SearchInput />
      <SortSelect />
      <ChipFilters />
    </form>
  );
}
