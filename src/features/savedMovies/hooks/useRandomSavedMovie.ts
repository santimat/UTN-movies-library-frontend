import { useShallow } from 'zustand/shallow';
import { useSavedMoviesStore } from '../store/useSavedMoviesStore';

export function useRandomSavedMovie() {
  const { randomSavedMovie, fetchRandomSavedMovie } = useSavedMoviesStore(
    useShallow((s) => ({
      randomSavedMovie: s.randomSavedMovie,
      fetchRandomSavedMovie: s.fetchRandomSavedMovie,
    }))
  );

  return { randomSavedMovie, fetchRandomSavedMovie };
}
