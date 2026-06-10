import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';
export function useSort() {
  const { sortBy, sortOrder } = useMovieSearchParams();
  const { setSortBy, setSortOrder } = useMovieSearchParams();
  return { sortBy, sortOrder, setSortBy, setSortOrder };
}
