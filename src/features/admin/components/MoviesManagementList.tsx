import { useState } from 'react';
import { type Movie } from '@/features/movies/types';
import { PenIcon } from '@/shared/components/icons/Pen';
import { StarIcon } from '@/shared/components/icons/Star';
import { TrashIcon } from '@/shared/components/icons/Trash';
import { Button } from '@/shared/components/ui/Button';
import { Modal } from '@/shared/components/ui/Modal';

export function MoviesManagementList({ movies }: { movies: Movie[] }) {
  const [showModal, setShowModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState<Movie | null>(null);

  const handleEdit = (movie: Movie) => {
    setMovieSelected(movie);
    setShowModal(true);
  };

  return (
    <>
      <ul className="mt-6 grid gap-4">
        {movies.map((movie) => (
          <li key={`movie-management-${movie.id}`}>
            <article className="grid grid-cols-4 gap-4 border-4 border-neutral p-2 font-headline shadow-auth">
              <img
                className="mx-auto h-24 w-20 border-2 border-neutral"
                src={movie.posterUrl}
                alt={movie.title}
              />
              <div className="col-span-2 flex flex-col justify-evenly">
                <h4 className="text-lg leading-4 font-bold">{movie.title}</h4>
                <div>
                  <span className="bg-neutral px-2 font-bold text-white">
                    {movie.genre}
                  </span>
                  <small className="font-bold">{` ${movie.releaseYear} - ${movie.duration} min`}</small>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon width={24} height={24} className="fill-amber-500" />
                  <span className="font-bold">{movie.averageRating}</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-2">
                <Button
                  className="shadow-none"
                  onClick={() => handleEdit(movie)}
                >
                  <PenIcon
                    className="pointer-events-none"
                    width={20}
                    height={20}
                  />
                </Button>
                <Button className="shadow-none">
                  <TrashIcon
                    width={20}
                    height={20}
                    className="pointer-events-none fill-secondary"
                  />
                </Button>
              </div>
            </article>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <article>{movieSelected?.title}</article>
        </Modal>
      )}
    </>
  );
}
