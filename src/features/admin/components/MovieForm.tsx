import { sileo } from 'sileo';
import { FormField } from '@/shared/components/ui/FormField';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { useModal } from '@/shared/hooks/useModal';
import { useMovieManagement } from '@/features/admin/hooks/useMovieManagement';
import { GenreInput } from '@/features/admin/components/GenreInput';
import { CloseIcon } from '@/shared/components/icons/Close';
import { UploadFile } from '@/features/admin/components/UploadFile';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
import { MOVIE_FIELDS } from '@/shared/utils/dictionaries';
import { useMovieActions } from '@/features/movies/hooks/useMovieActions';
import type { AppError } from '@/shared/types';

export function MovieForm() {
  const { closeModal } = useModal();
  const { createMovie, updateMovie } = useMovieActions();
  const { movieForm, handleChange } = useMovieManagement();

  const h2Text = movieForm?.id ? 'Editar Película' : 'Añadir Película';
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const missingFields = getMissingFields(movieForm, MOVIE_FIELDS);

    if (missingFields) {
      return sileo.warning({
        title: 'Campos faltantes',
        description: `Por favor complete ${missingFields} antes de continuar.`,
      });
    }
    try {
      const formData = new FormData(form);
      if (!movieForm?.id) {
        createMovie(formData);
        sileo.success({
          title: 'Película añadida',
          description: `${movieForm?.title} ha sido añadida correctamente.`,
        });
      } else {
        updateMovie(formData, movieForm?.id);
        sileo.success({
          title: 'Película actualizada',
          description: `${movieForm?.title} ha sido actualizada correctamente.`,
        });
      }

      closeModal();
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Ha ocurrido un error',
        description: error,
      });
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-full flex-1 scrollbar-none overflow-auto rounded-lg bg-white px-4 lg:h-[90%] lg:max-w-5xl">
        <div className="flex items-center gap-2 p-4">
          <MovieIcon width={30} height={30} />
          <h2 className="text-2xl font-bold text-neutral uppercase">
            {h2Text}
          </h2>
          <Button
            className="ml-auto bg-secondary p-1! font-headline font-bold text-white"
            onClick={closeModal}
          >
            <CloseIcon />
          </Button>
        </div>
        <form
          className="text-body mx-auto grid w-[90%] gap-4 pb-8 text-neutral"
          onSubmit={handleSubmit}
        >
          <FormField
            label="Title"
            placeholder="Toy Story 5"
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
          <GenreInput genre={movieForm?.genre} handleChange={handleChange} />
          <div className="grid grid-cols-2 gap-2">
            <FormField
              label="Año"
              type="number"
              name="releaseYear"
              value={movieForm?.releaseYear}
              onChangeValue={handleChange}
              placeholder="1950"
            />
            <FormField
              label="Duración (min)"
              type="number"
              name="duration"
              value={movieForm?.duration}
              onChangeValue={handleChange}
              placeholder="120"
            />
          </div>
          <UploadFile existingPoster={movieForm?.posterUrl} />
          <label className="flex flex-col font-semibold uppercase">
            Sinopsis
            <textarea
              className="border-2 border-b-4 border-neutral bg-white p-2 text-neutral"
              placeholder="Esta pelicula es hacer sobre unos juguetes..."
              name="synopsis"
              rows={5}
              value={movieForm?.synopsis}
              onChange={handleChange}
            />
          </label>
          <FormField
            label="Trailer URL"
            name="trailerUrl"
            placeholder="https://youtube.com/trailer+spiderman"
            value={movieForm?.trailerUrl}
            onChangeValue={handleChange}
          />
          <FormField
            label="Pelicula URL"
            name="watchUrl"
            placeholder="https://youtube.com/watch+spiderman"
            value={movieForm?.watchUrl}
            onChangeValue={handleChange}
            required={false}
          />
          <Button
            type="submit"
            className="mt-4 bg-tertiary font-bold text-white"
          >
            {movieForm?.id ? 'Actualizar Película' : 'Añadir Película'}
          </Button>
        </form>
      </div>
    </div>
  );
}
