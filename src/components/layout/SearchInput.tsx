import { SearchIcon } from '@/components/icons/Search';

export function SearchInput() {
  return (
    <label className="group relative flex items-center border-2 border-neutral shadow-auth md:w-80">
      <input
        className="peer w-full p-1 pl-8 uppercase focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:outline-none"
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
