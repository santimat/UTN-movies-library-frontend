import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';
import { Button } from '@/shared/components/ui/Button';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export function Pagination({ totalPages, currentPage }: PaginationProps) {
  const { updateSearchParam } = useMovieSearchParams();

  if (!totalPages || totalPages <= 1 || !currentPage) return null;
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const handlePageClick = (page: number) => {
    updateSearchParam({ page: page.toString() });
  };

  return (
    <ul className="mt-10 mb-6 flex justify-center gap-2">
      {pages.map((page) => {
        if (page <= end)
          return (
            <li key={`link-page-${page}`}>
              <Button
                onClick={() => handlePageClick(page)}
                className={`py-1 font-bold ${currentPage === page ? 'bg-tertiary text-white' : ''}`}
              >
                {page}
              </Button>
            </li>
          );
      })}
    </ul>
  );
}
