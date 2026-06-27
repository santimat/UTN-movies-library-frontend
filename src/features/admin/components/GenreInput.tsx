import { useId, useState } from 'react';
import { useGenres } from '@/features/genres/hooks/useGenres';
import { ArrowDownIcon } from '@/shared/components/icons/ArrowDown';
import { Button } from '@/shared/components/ui/Button';
import { AddIcon } from '@/shared/components/icons/Add';
import { FormField } from '@/shared/components/ui/FormField';
import { CloseIcon } from '@/shared/components/icons/Close';

type GenreInputProps = {
  genre: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function GenreInput({ genre, handleChange }: GenreInputProps) {
  const selectGenreId = useId();
  const { genres } = useGenres();
  const [isNewGenre, setIsNewGenre] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div className="flex flex-col font-semibold has-focus:[&>label]:text-tertiary">
      <label htmlFor={selectGenreId} className="uppercase">
        Genero
      </label>
      <div className="flex items-center gap-2">
        {isNewGenre ? (
          <FormField
            label=""
            type="text"
            name="genre"
            placeholder="Romance"
            className="w-full"
          />
        ) : (
          <div className="relative flex flex-1 items-center">
            <select
              id={selectGenreId}
              className="peer w-full border-2 border-b-4 border-neutral/60 border-b-neutral p-2 focus:border-tertiary focus:text-tertiary focus-visible:outline-none"
              value={genre}
              onChange={handleChange}
              name="genre"
              onBlur={() => setIsSelectOpen(false)}
              onClick={() => setIsSelectOpen((prev) => !prev)}
            >
              <option value={'placeholder'} disabled>
                Seleccione el genero
              </option>
              {genres.map(({ id, name }) => (
                <option
                  key={`genre-management-${id}`}
                  value={name}
                  className="text-primary"
                >
                  {name}
                </option>
              ))}
            </select>
            <ArrowDownIcon
              className={`pointer-events-none absolute right-2 rotate-90 transition-transform peer-focus:stroke-tertiary ${isSelectOpen ? 'rotate-0!' : ''}`}
              height={24}
              width={24}
            />
          </div>
        )}
        <Button
          className={`border-b-4 border-neutral/60 border-b-neutral shadow-none ${isNewGenre ? 'bg-secondary' : ''}`}
          onClick={() => setIsNewGenre((prev) => !prev)}
        >
          {isNewGenre ? (
            <CloseIcon className="text-white" />
          ) : (
            <AddIcon width={24} height={24} />
          )}
        </Button>
      </div>
    </div>
  );
}
