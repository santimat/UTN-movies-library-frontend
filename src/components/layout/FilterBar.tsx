import { SearchInput } from '@/components/layout/SearchInput';
import { SortSelect } from '@/components/layout/SortSelect';

export function FilterBar() {
  return (
    <form className="flex flex-col gap-4 p-4 font-semibold sm:max-w-80">
      <SearchInput />
      <SortSelect />
    </form>
  );
}
