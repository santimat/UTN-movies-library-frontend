import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import type { SORT_FIELDS } from '@/shared/utils/dictionaries';

export function useMovieSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre') || undefined;
  const sortBy =
    (searchParams.get('sortBy') as keyof typeof SORT_FIELDS) || 'averageRating';
  const sortOrder = (searchParams.get('sortOrder') as 'ASC' | 'DESC') || 'DESC';
  const searchText = searchParams.get('searchText')?.toLowerCase() || '';
  const page = searchParams.get('page') || '1';

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
    searchText,
    page,
    genre,
    sortBy,
    sortOrder,
    updateSearchParam,
  };
}
