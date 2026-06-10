import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';
export function useSort() {
  const { setSortBy, setSortOrder, sortOrder, sortBy } = useMovieSearchParams();
  return { sortBy, sortOrder, setSortBy, setSortOrder };
}
