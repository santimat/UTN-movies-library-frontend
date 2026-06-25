import { SubmitButton } from '@/features/auth/components/SubmitButton';
import { FormField } from '@/shared/components/ui/FormField';
import { useModal } from '@/shared/hooks/useModal';

export function CreateGenre() {
  const { handleClickOutside } = useModal();
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="grid h-full place-content-center"
      onClick={handleClickOutside}
    >
      <form className="bg-white p-4" onSubmit={handleSubmit}>
        <FormField
          label="Genero"
          placeholder="Acción"
          name="name"
          type="text"
        />
        <SubmitButton className="text-neutral!" value="Agregar genero" />
      </form>
    </div>
  );
}
