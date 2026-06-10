import { type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router';
import { type Movie } from '@/features/movies/types';

export function useMovieSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const genre = searchParams.get('genre') || undefined;
  const searchText = searchParams.get('searchText') || 'undefined';
  const sortBy = (searchParams.get('sortBy') as keyof Movie) || 'title';
  const sortOrder = (searchParams.get('sortOrder') as 'ASC' | 'DESC') || 'ASC';

  const setSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as keyof Movie;
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('sortBy', value);
      return next;
    });
  };

  const setSortOrder = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const currentSortOrder = next.get('sortOrder');
      const nextSortOrder = currentSortOrder === 'ASC' ? 'DESC' : 'ASC';
      next.set('sortOrder', nextSortOrder);
      return next;
    });
  };

  return { genre, sortBy, sortOrder, searchText, setSortBy, setSortOrder };
}
