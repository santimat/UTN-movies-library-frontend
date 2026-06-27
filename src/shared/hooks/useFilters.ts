import { useState } from 'react';

type Filters = Record<string, string>;

export function useFilters(defaults: Filters) {
  const [filters, setFilters] = useState<Filters>(defaults);

  const updateFilters = (newFilters: Filters) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, ...newFilters };
    });
  };

  const resetFilters = () => {
    setFilters(defaults);
  };

  return { updateFilters, filters, resetFilters };
}
