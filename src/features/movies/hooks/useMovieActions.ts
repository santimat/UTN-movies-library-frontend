import { useShallow } from 'zustand/shallow';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';

export function useMovieActions() {
  const { createMovie, updateMovie, deleteMovie } = useMoviesStore(
    useShallow((s) => ({
      createMovie: s.createMovie,
      updateMovie: s.updateMovie,
      deleteMovie: s.deleteMovie,
    }))
  );

  return {
    createMovie,
    updateMovie,
    deleteMovie,
  };
}
