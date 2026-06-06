import { MovieList } from '@/components/layout/MovieList';
import { FilterBar } from '@/components/layout/FilterBar';
import { Pagination } from '@/components/layout/Pagination';

export function Home() {
  return (
    <>
      <title>Biblioteca de Películas</title>
      <div>
        <div>
          <FilterBar />
          <MovieList />
        </div>
        <Pagination />
      </div>
    </>
  );
}
