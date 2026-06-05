import { useState } from 'react';
import { ArrowDownIcon } from '@/components/icons/ArrowDown';

export function SortSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <label className="relative shadow-auth md:w-60">
      <span
        className={`pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 transition-transform ${isSelectOpen && 'rotate-90'}`}
      >
        <ArrowDownIcon className="stroke-neutral" width={24} height={24} />
      </span>
      <select
        onBlur={() => setIsSelectOpen(false)}
        onClick={() => setIsSelectOpen((prev) => !prev)}
        name="sort"
        defaultValue="sort"
        aria-label="Filtro de ordenamiento"
        className="peer w-full border-2 border-neutral p-1 uppercase"
      >
        <option disabled value={'sort'}>
          Ordenar por
        </option>
        <option value={'all'}>Todos</option>
        <option value={'title'}>Titulo</option>
        <option value={'genre'}>Genero</option>
        <option value={'rating'}>Rating</option>
        <option value={'year'}>Año</option>
      </select>
    </label>
  );
}
