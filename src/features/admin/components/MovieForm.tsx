import { FormField } from '@/shared/components/ui/FormField';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { useModal } from '@/shared/hooks/useModal';
import { useMovieManagement } from '@/features/admin/hooks/useMovieManagement';
import { GenreInput } from '@/features/admin/components/GenreInput';
import { CloseIcon } from '@/shared/components/icons/Close';
import { UploadFile } from '@/features/admin/components/UploadFile';

export function MovieForm() {
  const { closeModal } = useModal();
  const { movieForm, handleChange, handleSubmit } = useMovieManagement();

  const h2Text = movieForm?.id ? 'Editar Película' : 'Añadir Película';

  return (
    <div className="h-full overflow-auto bg-white p-4">
      <div className="mb-6 flex items-center gap-2">
        <MovieIcon width={30} height={30} />
        <h2 className="text-2xl font-bold text-neutral uppercase">{h2Text}</h2>
        <Button
          className="ml-auto bg-secondary p-1! font-headline font-bold text-white"
          onClick={closeModal}
        >
          <CloseIcon />
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
        <GenreInput
          genre={movieForm?.genre ?? 'placeholder'}
          handleChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-2">
          <FormField
            label="Año"
            type="number"
            name="releaseYear"
            value={movieForm?.releaseYear.toString()}
            onChangeValue={handleChange}
            placeholder="1950"
          />
          <FormField
            label="Duración (min)"
            type="number"
            name="duration"
            value={movieForm?.duration.toString()}
            onChangeValue={handleChange}
            placeholder="120"
          />
        </div>
        <UploadFile existingPoster={movieForm?.posterUrl} />
      </form>
    </div>
  );
}
