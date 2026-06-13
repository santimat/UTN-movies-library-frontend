import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';
import { useShallow } from 'zustand/shallow';

export function Pagination() {
  const { totalPages, currentPage } = useMoviesStore(
    useShallow((s) => ({
      totalPages: s.data.totalPages,
      currentPage: s.data.currentPage,
    }))
  );
  if (!totalPages || totalPages <= 1 || !currentPage) return null;
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages[i] = i;
  }

  return (
    <ul className="mt-10 mb-6 flex justify-center gap-2">
      {pages.map((page) => {
        if (page <= end)
          return (
            <li key={`link-page-${page}`}>
              <ButtonLink
                to={`?page=${page}`}
                className={`py-1 ${currentPage === page ? 'bg-tertiary text-white' : ''}`}
              >
                {page}
              </ButtonLink>
            </li>
          );
      })}
    </ul>
  );
}
