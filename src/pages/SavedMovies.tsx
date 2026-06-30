import { SavedMoviesList } from '@/features/savedMovies/components/SavedMoviesList';
import { useSavedMovies } from '@/features/savedMovies/hooks/useSavedMovies';
import { GenreFilters } from '@/shared/components/ui/GenreFilters';
import { Pagination } from '@/shared/components/ui/Pagination';
import { SearchInput } from '@/shared/components/ui/SearchInput';
import { useFilters } from '@/shared/hooks/useFilters';
import { DEFAULT_SAVEDMOVIES_FILTERS } from '@/shared/utils/constants';
import { useState } from 'react';

export function SavedMovies() {
  const { filters, updateFilters } = useFilters(DEFAULT_SAVEDMOVIES_FILTERS);
  const { savedMovies, currentPage, totalPages, totalElements } =
    useSavedMovies(filters);
  const [totalSavedMovies] = useState(totalElements);

  return (
    <section className="mb-6">
      <h1 className="font-headl font-headline text-8xl font-bold text-neutral uppercase">
        Mi lista
      </h1>
      <p className="mt-2 inline-block border-4 border-neutral bg-secondary p-2 font-headline text-2xl font-bold text-white uppercase">
        <span>{totalSavedMovies}</span>{' '}
        {totalSavedMovies > 1 ? 'Peliculas guardadas' : 'Pelicula guardada'}
      </p>
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
