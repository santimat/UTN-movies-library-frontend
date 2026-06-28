import { SearchInput } from '@/shared/components/ui/SearchInput';
import { SortSelect } from '@/shared/components/ui/SortSelect';
import { GenreFilters } from '@/shared/components/ui/GenreFilters';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';

export function FilterBar() {
  const { updateSearchParam } = useMovieSearchParams();

  const handleUpdateFilters = ({
    searchText,
    page,
  }: {
    searchText: string;
    page: string;
  }) => {
    updateSearchParam({ searchText, page });
  };

  return (
    <form
      className="mb-4 flex flex-col gap-4 font-semibold"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <SearchInput updateFilters={handleUpdateFilters} />
        <SortSelect />
      </div>
      <GenreFilters />
    </form>
  );
}
