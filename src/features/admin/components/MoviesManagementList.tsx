import { useState } from 'react';
import { type Movie } from '@/features/movies/types';

import { Modal } from '@/shared/components/ui/Modal';
import { MovieManagementCard } from './MovieManagementCard';

export function MoviesManagementList({ movies }: { movies: Movie[] }) {
  const [showModal, setShowModal] = useState(false);
  const [movieSelected, setMovieSelected] = useState<Movie | null>(null);

  return (
    <>
      <ul className="mt-6 grid gap-4">
        {movies.map((movie) => (
          <li key={`movie-management-${movie.id}`}>
            <MovieManagementCard
              setMovieSelected={setMovieSelected}
              setShowModal={setShowModal}
              movie={movie}
            />
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
