import { useMovies } from '@/features/movies/hooks/useMovies';
import { AddIcon } from '@/shared/components/icons/Add';
import { Button } from '@/shared/components/ui/Button';
import { Pagination } from '@/shared/components/ui/Pagination';
import { MoviesManagementList } from '@/features/admin/components/MoviesManagementList';
import { MovieForm } from '@/features/admin/components/MovieForm';
import { useModal } from '@/shared/hooks/useModal';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
import { initialMovieForm } from '@/shared/utils/constants';

export function MovieAdminPanel() {
  const { movies, totalPages, currentPage } = useMovies();

  const setMovieForm = useMovieManagementStore((s) => s.setMovieForm);
  const { openModal } = useModal();

  const handleAddMovie = () => {
    setMovieForm(initialMovieForm);
    openModal(<MovieForm />);
  };

  return (
    <section className="mx-auto mt-10 w-[90%]">
      <div className="flex items-center justify-between">
        <h2 className="px-2 text-center text-xl font-bold uppercase">
          Películas
        </h2>
        <Button
          onClick={handleAddMovie}
          className="flex items-center justify-center gap-2 bg-tertiary text-sm font-bold text-white uppercase"
        >
          <AddIcon width={24} height={24} />
          Añadir película
        </Button>
      </div>
      <MoviesManagementList movies={movies} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  );
}
