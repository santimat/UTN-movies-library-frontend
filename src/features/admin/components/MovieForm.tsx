import { useId } from 'react';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
import { FormField } from '@/shared/components/ui/FormField';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { useModalStore } from '@/shared/store/useModalStore';
export function MovieForm() {
  const movieForm = useMovieManagementStore((s) => s.movieForm);
  const setMovieForm = useMovieManagementStore((s) => s.setMovieForm);
  const closeModal = useModalStore((s) => s.closeModal);
  const idTitle = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovieForm({ [name]: value });
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
      <form className="text-body grid w-3/4 place-content-center gap-4 text-neutral [&>label]:w-full">
        <FormField
          id={idTitle}
          label="Title"
          placeholder="toy story 5"
          name="title"
          value={movieForm?.title}
          onChangeValue={handleChange}
        />
        <FormField
          id={idTitle}
          label="Director"
          placeholder="Andrew Stanton"
          name="director"
          value={movieForm?.director}
          onChangeValue={handleChange}
        />
      </form>
    </div>
  );
}
