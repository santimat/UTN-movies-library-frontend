import { type ChangeEvent, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { type Movie } from '@/features/movies/types';
import { DEBOUNCE_TIME } from '@/shared/utils/constants';

export function useMovieSearchParams() {
  const timeoutRef = useRef<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get('searchText') || ''
  );
  const genre = searchParams.get('genre') || undefined;
  const sortBy = (searchParams.get('sortBy') as keyof Movie) || 'title';
  const sortOrder = (searchParams.get('sortOrder') as 'ASC' | 'DESC') || 'ASC';
  const page = searchParams.get('page') || '0';
  const searchText = searchParams.get('searchText') || undefined;

  const setSortBy = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('sortBy', value);
      return next;
    });
  };

  const setSortOrder = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const nextSortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
      next.set('sortOrder', nextSortOrder);
      return next;
    });
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchParams((prevParams) => {
        const next = new URLSearchParams(prevParams);
        if (inputValue == '') next.delete('searchText');
        else next.set('searchText', inputValue);
        return next;
      });
    }, DEBOUNCE_TIME);

    return () => clearTimeout(timeoutRef.current);
  }, [inputValue, setSearchParams]);

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
  };
}
