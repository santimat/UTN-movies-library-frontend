import { SearchIcon } from '@/components/icons/Search';
import { useState, type ChangeEvent, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router';

export function SearchInput() {
  const timeoutRef = useRef<number>(0);
  const DEBOUNCE_TIME = 400;
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState<string>(
    searchParams.get('searchText') || ''
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchParams((prevParams) => {
        if (searchText == '') prevParams.delete('searchText');
        else prevParams.set('searchText', searchText);
        return prevParams;
      });
    }, DEBOUNCE_TIME);
  }, [searchText, setSearchParams]);

  return (
    <label className="group relative flex items-center border-2 border-neutral shadow-auth md:w-80">
      <input
        onChange={handleChange}
        value={searchText}
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
