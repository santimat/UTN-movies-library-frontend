import { useShallow } from 'zustand/shallow';
import { useSavedMoviesStore } from '@/features/savedMovies/store/useSavedMoviesStore';

export function useSavedMoviesActions() {
  const { saveMovieInMyList, deleteSavedMovie } = useSavedMoviesStore(
    useShallow((s) => ({
      saveMovieInMyList: s.saveMovieInMyList,
      deleteSavedMovie: s.deleteSavedMovie,
    }))
  );

  return { saveMovieInMyList, deleteSavedMovie };
}
