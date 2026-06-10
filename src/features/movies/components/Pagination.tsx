import { useMoviesStore } from '@/features/movies/store/useMoviesStore';

export function Pagination() {
  const totalPages = useMoviesStore((s) => s.data.totalPages);
  if (totalPages && totalPages < 1) return null;

  return (
    <ul>
      <li></li>
    </ul>
  );
}
