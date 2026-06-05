import { SearchIcon } from '@/components/icons/Search';

export function SearchInput() {
  return (
    <label className="relative flex items-center border-2 border-neutral">
      <SearchIcon
        className="absolute left-1 stroke-neutral/70"
        width={24}
        height={24}
      />
      <input
        className="w-full p-1 pl-8 uppercase"
        placeholder="Spiderman"
        type="search"
        name="search"
        aria-label="Buscar peliculas"
      ></input>
    </label>
  );
}
