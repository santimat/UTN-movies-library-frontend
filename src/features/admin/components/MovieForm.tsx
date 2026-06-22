import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
export function MovieForm() {
  const movieForm = useMovieManagementStore((s) => s.movieForm);

  return (
    <>
      <form className="text-neutral">
        <div>
          <label>Titulo</label>
          <input
            type="text"
            name="title"
            placeholder="Toy story 5"
            value={movieForm?.title ?? ''}
          />
        </div>
      </form>
    </>
  );
}
