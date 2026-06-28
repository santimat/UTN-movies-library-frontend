import { Button } from '@/shared/components/ui/Button';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  updatePage: ({ page }: { page: string }) => void;
};

export function Pagination({
  totalPages,
  currentPage,
  updatePage,
}: PaginationProps) {
  if (!totalPages || totalPages <= 1 || !currentPage) return null;
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <ul className="mt-10 mb-6 flex justify-center gap-2">
      {pages.map((page) => {
        if (page <= end) {
          const isCurrentPage = page === currentPage;
          return (
            <li key={`link-page-${page}`}>
              <Button
                onClick={() =>
                  !isCurrentPage
                    ? updatePage({ page: page.toString() })
                    : undefined
                }
                className={`py-1 font-bold ${currentPage === page ? 'bg-tertiary text-white' : ''}`}
              >
                {page}
              </Button>
            </li>
          );
        }
      })}
    </ul>
  );
}
