import { useState } from 'react';

export function useFilters(defaults: Record<string, string>) {
  const [filters, setFilters] = useState(defaults);

  const updateFilters = (newFilters: Record<string, string>) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, ...newFilters };
    });
  };

  const resetFilters = () => {
    setFilters(defaults);
  };

  return { updateFilters, filters, resetFilters };
}
