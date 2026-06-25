import { useId } from 'react';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
import { FormField } from '@/shared/components/ui/FormField';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { ArrowDownIcon } from '@/shared/components/icons/ArrowDown';
import { AddIcon } from '@/shared/components/icons/Add';
import { useGenres } from '@/features/genres/hooks/useGenres';
import { CreateGenre } from '@/features/genres/components/CreateGenre';
import { useModal } from '@/shared/hooks/useModal';

export function MovieForm() {
  const selectGenreId = useId();
  const movieForm = useMovieManagementStore((s) => s.movieForm);
  const setMovieForm = useMovieManagementStore((s) => s.setMovieForm);
  const { closeModal, openModal } = useModal();

  const { genres } = useGenres();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setMovieForm({ [name]: value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleAddGenre = () => {
    openModal(<CreateGenre />);
  };

  const h2Text = movieForm?.id ? 'Editar Película' : 'Añadir Película';
  return (
    <div className="h-full bg-white p-4">
      <div className="mb-6 flex items-center gap-2">
        <MovieIcon width={30} height={30} />
        <h2 className="text-2xl font-bold text-neutral uppercase">{h2Text}</h2>
        <Button
          className="ml-auto bg-secondary py-0! font-headline font-bold text-white"
          onClick={closeModal}
        >
          X
        </Button>
      </div>
      <form
        className="text-body mx-auto grid w-[90%] gap-4 text-neutral"
        onSubmit={handleSubmit}
      >
        <FormField
          label="Title"
          placeholder="toy story 5"
          name="title"
          value={movieForm?.title}
          onChangeValue={handleChange}
        />
        <FormField
          label="Director"
          placeholder="Andrew Stanton"
          name="director"
          value={movieForm?.director}
          onChangeValue={handleChange}
        />
        <div>
          <label htmlFor={selectGenreId} className="uppercase">
            Genero
          </label>
          <div className="flex items-center gap-2 font-semibold">
            <div className="relative flex flex-1 items-center">
              <select
                id={selectGenreId}
                className="w-full border-2 border-b-4 border-neutral/60 border-b-neutral p-2 focus:border-tertiary focus-visible:outline-none"
                value={movieForm?.genre}
                onChange={handleChange}
                name="genre"
              >
                {genres.map(({ id, name }) => (
                  <option key={`genre-management-${id}`} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <ArrowDownIcon
                className="pointer-events-none absolute right-2"
                height={24}
                width={24}
              />
            </div>
            <Button
              className="border-b-4 border-neutral/60 border-b-neutral shadow-none"
              onClick={handleAddGenre}
            >
              <AddIcon width={24} height={24} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
