import { useId, useState } from 'react';
import { useGenres } from '@/features/genres/hooks/useGenres';
import { ArrowDownIcon } from '@/shared/components/icons/ArrowDown';
import { Button } from '@/shared/components/ui/Button';
import { AddIcon } from '@/shared/components/icons/Add';
import { FormField } from '@/shared/components/ui/FormField';

type GenreSelectProps = {
  genre: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function GenreSelect({ genre, handleChange }: GenreSelectProps) {
  const selectGenreId = useId();
  const { genres } = useGenres();
  const [newGenre, setNewGenre] = useState(false);

  return (
    <div className="flex flex-col gap-2 font-semibold">
      <label htmlFor={selectGenreId} className="uppercase">
        Genero
      </label>
      <div className="flex items-center gap-2">
        <div className="relative flex flex-1 items-center">
          <select
            id={selectGenreId}
            className="w-full border-2 border-b-4 border-neutral/60 border-b-neutral p-2 focus:border-tertiary focus-visible:outline-none"
            value={genre}
            onChange={handleChange}
            name="genre"
          >
            {genres.map(({ id, name }) => (
              <option key={`genre-management-${id}`} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ArrowDownIcon
            className="pointer-events-none absolute right-2"
            height={24}
            width={24}
          />
        </div>
        <Button className="border-b-4 border-neutral/60 border-b-neutral shadow-none">
          <AddIcon width={24} height={24} />
        </Button>
      </div>
      <FormField label="Nuevo genero" type="text" name="newGenre" />
    </div>
  );
}
