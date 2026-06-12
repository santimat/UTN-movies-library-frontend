import { SearchInput } from '@/shared/components/ui/SearchInput';
import { SortSelect } from '@/shared/components/ui/SortSelect';
import { GenreFilters } from '@/shared/components/ui/GenreFilters';

export function Filters() {
  return (
    <form
      className="mb-4 flex flex-col gap-4 font-semibold"
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
