import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import { SORT_FIELDS } from '@/shared/utils/dictionaries';
import { DEFAULT_MOVIE_FILTERS } from '@/shared/utils/constants';

export function useMovieSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    genre: searchParams.get('genre') || DEFAULT_MOVIE_FILTERS.genre,
    sortBy:
      (searchParams.get('sortBy') as keyof typeof SORT_FIELDS) ||
      DEFAULT_MOVIE_FILTERS.sortBy,
    sortOrder:
      (searchParams.get('sortOrder') as 'ASC' | 'DESC') ||
      DEFAULT_MOVIE_FILTERS.sortOrder,
    searchText:
      searchParams.get('searchText') || DEFAULT_MOVIE_FILTERS.searchText,
    page: searchParams.get('page') || DEFAULT_MOVIE_FILTERS.page,
  };

  const updateSearchParam = useCallback(
    (filter: Record<string, string>) => {
      setSearchParams((prev) => {
        const nextParams = new URLSearchParams(prev);
        Object.entries(filter).forEach(([key, value]) => {
          if (!value) nextParams.delete(key);
          else nextParams.set(key, value);
        });

        return nextParams;
      });
    },
    [setSearchParams]
  );

  return {
    filters,
    updateSearchParam,
  };
}
