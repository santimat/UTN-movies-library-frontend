import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { FormField } from '@/components/ui/FormField';
import { AuthForm } from '@/components/ui/AuthForm';
import { authService } from '@/services/authService';

const FIELDS_DICTIONARY = {
  username: 'Nombre de usuario',
  email: 'Correo electrónico',
  password: 'Contraseña',
};

export function RegisterForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const missingFields = Array.from(formData.keys()).filter((field) => {
      const value = formData.get(field);
      return !value || value.toString().trim() === '';
    });

    if (missingFields.length) {
      const missingFieldNames = missingFields.map((field) => {
        return FIELDS_DICTIONARY[field as keyof typeof FIELDS_DICTIONARY];
      });

      return toast.error(
        `Por favor, completa los siguientes campos: ${missingFieldNames.join(', ')}`
      );
    }

    const response = await authService.register(formData);
    if (response.code === 'ALREADY_EXISTS') return toast.error(response.error);
    if (response.code === 'UNKNOWN_ERROR') return toast.error(response.error);

    toast.success('¡Registro exitoso! Ahora puedes iniciar sesión.');
  };

  return (
    <>
      <AuthForm
        title="Regístrate"
        submitLabel="Registrarse"
        onSubmit={handleSubmit}
      >
        <FormField
          id={usernameId}
          label="Nombre de usuario"
          type="text"
          placeholder="pepegamer"
          name="username"
        />
        <FormField
          id={emailId}
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
          name="email"
        />
        <FormField
          id={passwordId}
          label="Contraseña"
          type="password"
          placeholder="***********"
          name="password"
        />
      </AuthForm>
    </>
  );
}
