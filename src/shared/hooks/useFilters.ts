import { useState } from 'react';
import type { DEFAULT_MOVIE_FILTERS } from '@/shared/utils/constants';

export function useFilters(defaults: typeof DEFAULT_MOVIE_FILTERS) {
  const [filters, setFilters] = useState(defaults);

  const updateFilters = (newFilters: Partial<typeof DEFAULT_MOVIE_FILTERS>) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, ...newFilters };
    });
  };

  const resetFilters = () => {
    setFilters(defaults);
  };

  return { updateFilters, filters, resetFilters };
}
