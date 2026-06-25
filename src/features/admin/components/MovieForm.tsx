import { FormField } from '@/shared/components/ui/FormField';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { useModal } from '@/shared/hooks/useModal';
import { useMovieManagement } from '@/features/admin/hooks/useMovieManagement';
import { GenreInput } from '@/features/admin/components/GenreInput';
import { CloseIcon } from '@/shared/components/icons/Close';

export function MovieForm() {
  const { closeModal } = useModal();
  const { movieForm, handleChange, handleSubmit } = useMovieManagement();

  const h2Text = movieForm?.id ? 'Editar Película' : 'Añadir Película';

  return (
    <div className="h-full bg-white p-4">
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
      </form>
    </div>
  );
}
