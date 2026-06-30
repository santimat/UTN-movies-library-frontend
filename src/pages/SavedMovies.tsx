import { useState } from 'react';
import { SavedMoviesList } from '@/features/savedMovies/components/SavedMoviesList';
import { useSavedMovies } from '@/features/savedMovies/hooks/useSavedMovies';
import { GenreFilters } from '@/shared/components/ui/GenreFilters';
import { Pagination } from '@/shared/components/ui/Pagination';
import { SearchInput } from '@/shared/components/ui/SearchInput';
import { useFilters } from '@/shared/hooks/useFilters';
import { DEFAULT_SAVEDMOVIES_FILTERS } from '@/shared/utils/constants';
import { Button } from '@/shared/components/ui/Button';
import { useRandomSavedMovie } from '@/features/savedMovies/hooks/useRandomSavedMovie';
import { RandomIcon } from '@/shared/components/icons/Random';
import type { AppError } from '@/shared/types';
import { sileo } from 'sileo';
import { useModal } from '@/shared/hooks/useModal';
import { RandomSavedMovie } from '@/features/savedMovies/components/RandomSavedMovie';

export function SavedMovies() {
  const { openModal } = useModal();
  const { filters, updateFilters } = useFilters(DEFAULT_SAVEDMOVIES_FILTERS);
  const { savedMovies, currentPage, totalPages, totalElements } =
    useSavedMovies(filters, '10');
  const { fetchRandomSavedMovie } = useRandomSavedMovie();
  const [totalSavedMovies] = useState(totalElements);

  const counterText =
    totalSavedMovies > 1 || totalSavedMovies === 0
      ? 'Películas guardadas'
      : 'Película guardada';

  const handleSeeRandomSavedMovie = async () => {
    try {
      await fetchRandomSavedMovie();
      openModal(<RandomSavedMovie />);
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Ha ocurrido un error',
        description: error,
      });
    }
  };

  return (
    <section className="mb-6">
      <h1 className="font-headl font-headline text-8xl font-bold text-neutral uppercase">
        Mi lista
      </h1>
      <div className="flex flex-col justify-between gap-4 text-center lg:flex-row">
        <p className="mt-2 inline-block border-4 border-neutral bg-secondary p-2 font-headline text-2xl font-bold text-white uppercase">
          <span>{totalSavedMovies}</span> {counterText}
        </p>
        <Button
          className="flex items-center justify-center gap-2 bg-tertiary py-0! text-xl font-bold text-white"
          onClick={handleSeeRandomSavedMovie}
        >
          <RandomIcon />
          Obtener recomendación
        </Button>
      </div>
      <div className="my-6 flex flex-col gap-2">
        <SearchInput updateText={updateFilters} placeholder="Toy Story" />
        <GenreFilters updateGenre={updateFilters} genre={filters.genre} />
      </div>
      <SavedMoviesList savedMovies={savedMovies} />
      <Pagination
        updatePage={updateFilters}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
