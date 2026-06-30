import { useShallow } from 'zustand/shallow';
import { useSavedMoviesStore } from '@/features/savedMovies/store/useSavedMoviesStore';

export function useSavedMoviesActions() {
  const { saveMovieInMyList } = useSavedMoviesStore(
    useShallow((s) => ({
      saveMovieInMyList: s.saveMovieInMyList,
    }))
  );

  return { saveMovieInMyList };
}
