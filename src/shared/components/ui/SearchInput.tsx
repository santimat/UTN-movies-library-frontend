import { useEffect, useState, useRef, type ChangeEvent } from 'react';
import { SearchIcon } from '@/shared/components/icons/Search';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';
import { DEBOUNCE_TIME } from '@/shared/utils/constants';

export function SearchInput() {
  const { updateSearchParam } = useMovieSearchParams();
  const [inputValue, setInputValue] = useState('');
  const timeoutRef = useRef(0);

  const normalizeSearch = (text: string) => {
    return (
      text
        .normalize('NFD')
        // Regex for accents keeping 'ñ'
        .replace(/[\u0300-\u0302\u0304-\u036f]/g, '')
        .toLowerCase()
    );
  };

  normalizeSearch('canción');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(
    () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        updateSearchParam({
          searchText: normalizeSearch(inputValue),
          page: '1',
        });
      }, DEBOUNCE_TIME);

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue]
  );

  return (
    <label className="group relative flex items-center border-2 border-neutral shadow-auth md:w-80">
      <input
        onChange={handleSearchChange}
        value={inputValue}
        className="peer w-full p-1 pl-8 placeholder:uppercase focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:outline-none"
        placeholder="Spiderman"
        type="search"
        name="search"
        aria-label="Buscar peliculas"
      />
      <SearchIcon
        className="absolute left-1 stroke-neutral/70 peer-focus-visible:stroke-tertiary"
        width={24}
        height={24}
      />
    </label>
  );
}
