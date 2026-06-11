import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';

export function Pagination() {
  const totalPages = useMoviesStore((s) => s.data.totalPages);
  if (!totalPages || totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <ul className="mt-6 flex justify-center gap-2">
      {pages.map((page) => (
        <li key={`link-page-${page}`}>
          <ButtonLink to={`?page=${page}`} className="py-1">
            {page}
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
}
