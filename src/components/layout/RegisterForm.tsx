import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { FormField } from '@/components/ui/FormField';
import { AuthForm } from '@/components/ui/AuthForm';
import { authService } from '@/services/authService';
import { REGISTER_FIELDS } from '@/lib/constants';
import { validateService } from '@/services/validateService';

export function RegisterForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (validateService.areMissingFields(formData, REGISTER_FIELDS)) return;

    const response = await authService.register(formData);
    if (response.code === 'ALREADY_EXISTS' || response.code === 'UNKNOWN_ERROR')
      return toast.error(response.error);

    toast.success('¡Registro exitoso! Ahora puedes iniciar sesión.');
    event.currentTarget.reset();
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
