import { PenIcon } from '@/shared/components/icons/Pen';
import { StarIcon } from '@/shared/components/icons/Star';
import { TrashIcon } from '@/shared/components/icons/Trash';
import { Button } from '@/shared/components/ui/Button';
import { type AppError, type Movie } from '@/shared/types';
import { MovieForm } from '@/features/admin/components/MovieForm';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
import { useModal } from '@/shared/hooks/useModal';
import { sileo } from 'sileo';
import { useMovieActions } from '@/features/movies/hooks/useMovieActions';
type MovieManagementCardProps = {
  movie: Movie;
};

export function MovieManagementCard({ movie }: MovieManagementCardProps) {
  const { openModal } = useModal();
  const setMovieForm = useMovieManagementStore((s) => s.setMovieForm);
  const { deleteMovie } = useMovieActions();
  const handleEdit = () => {
    setMovieForm(movie);
    openModal(<MovieForm />);
  };

  const handleDeleteMovie = async () => {
    try {
      sileo.clear();
      await sileo.promise(deleteMovie(movie.id), {
        loading: { title: 'Eliminando...' },
        success: { title: 'Película eliminada' },
        error: { title: 'Error al eliminar' },
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al eliminar la película',
        description: error,
      });
    }
  };

  const handleDelete = () => {
    sileo.action({
      title: 'Eliminar película',
      description: `¿Estás seguro de que deseas eliminar la película "${movie.title}"? Esta acción no se puede deshacer.`,
      button: {
        title: 'Eliminar',
        onClick: handleDeleteMovie,
      },
    });
  };

  return (
    <article className="grid grid-cols-3 gap-4 border-4 border-neutral p-2 font-headline shadow-auth">
      <img
        className="m-auto h-30 w-20 border-2 border-neutral"
        src={movie.posterUrl}
        alt={movie.title}
      />
      <div className="col-span-2 flex flex-col justify-evenly gap-2">
        <h4 className="text-lg leading-4 font-bold">{movie.title}</h4>
        <div className="flex items-center gap-2">
          <span className="bg-neutral px-2 font-bold text-white">
            {movie.genre}
          </span>
          <small className="font-bold">{movie.releaseYear}</small>
          <small className="font-bold">{movie.duration} min</small>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon width={24} height={24} className="fill-amber-500" />
          <span className="font-bold">{movie.averageRating}</span>
        </div>
      </div>
      <div className="col-span-3 grid w-full grid-cols-2 gap-2">
        <Button
          className="flex items-center justify-center gap-2 font-bold uppercase shadow-none"
          onClick={handleEdit}
        >
          Editar
          <PenIcon
            className="pointer-events-none inline"
            width={20}
            height={20}
          />
        </Button>
        <Button
          className="flex items-center justify-center gap-2 font-bold uppercase shadow-none"
          onClick={handleDelete}
        >
          Eliminar
          <TrashIcon
            width={20}
            height={20}
            className="pointer-events-none inline fill-secondary"
          />
        </Button>
      </div>
    </article>
  );
}
