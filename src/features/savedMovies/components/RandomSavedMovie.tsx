import { MovieDetail } from '@/features/movies/components/MovieDetail';
import { useRandomSavedMovie } from '@/features/savedMovies/hooks/useRandomSavedMovie';
import { CloseIcon } from '@/shared/components/icons/Close';
import { MovieIcon } from '@/shared/components/icons/Movie';
import { Button } from '@/shared/components/ui/Button';
import { useModal } from '@/shared/hooks/useModal';

export function RandomSavedMovie() {
  const { handleClickOutside, closeModal } = useModal();
  const { randomSavedMovie } = useRandomSavedMovie();

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className="h-full w-full scrollbar-thin overflow-auto bg-white lg:h-[80%] lg:w-[80%]">
        <div className="flex items-center gap-2 p-4">
          <MovieIcon width={30} height={30} />
          <h2 className="text-2xl font-bold text-neutral uppercase">
            Película recomendada
          </h2>
          <Button
            className="ml-auto bg-secondary p-1! font-headline font-bold text-white"
            onClick={closeModal}
          >
            <CloseIcon />
          </Button>
        </div>
        <div className="mx-auto w-[90%] pb-6">
          <MovieDetail movie={randomSavedMovie} />
        </div>
      </div>
    </div>
  );
}
