import {
  type ChangeEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { useSearchParams } from 'react-router';
import { type Movie } from '@/features/movies/types';
import { DEBOUNCE_TIME } from '@/shared/utils/constants';

export function useMovieSearchParams() {
  const timeoutRef = useRef<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre') || undefined;
  const sortBy = (searchParams.get('sortBy') as keyof Movie) || 'title';
  const sortOrder = (searchParams.get('sortOrder') as 'ASC' | 'DESC') || 'ASC';
  const page = searchParams.get('page') || '0';
  const searchText = searchParams.get('searchText') || '';

  const [inputValue, setInputValue] = useState<string>(searchText);

  const updateSearchParam = useCallback(
    (filter: Record<string, string>) => {
      setSearchParams((prev) => {
        const { key, value } = filter;
        const nextParams = new URLSearchParams(prev);
        if (!value) nextParams.delete(key);
        else nextParams.set(key, value);

        return nextParams;
      });
    },
    [setSearchParams]
  );

  const setSortBy = (value: string) => {
    updateSearchParam({ key: 'sortBy', value });
  };

  const setSortOrder = useCallback(() => {
    const value = sortOrder === 'ASC' ? 'DESC' : 'ASC';
    updateSearchParam({ key: 'sortOrder', value });
  }, [sortOrder, updateSearchParam]);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value.toLowerCase());
    },
    []
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      updateSearchParam({ key: 'searchText', value: inputValue });
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return {
    inputValue,
    searchText,
    page,
    genre,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
    handleSearchChange,
    updateSearchParam,
  };
}
