import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { REGISTER_FIELDS } from '@/shared/utils/constants';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { FormField } from '@/features/auth/components/AuthFormField';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { areMissingFields } from '@/shared/utils/checkMissingFields';
import { type AppError } from '@/shared/types';
export function RegisterForm() {
  const register = useAuthStore((s) => s.register);
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;

    if (areMissingFields(formData, REGISTER_FIELDS)) return;
    try {
      await register(formData);
      toast.success('Registro exitoso. Ahora puedes iniciar sesión.');
    } catch (err) {
      const { error } = err as AppError;
      toast.error(error);
    } finally {
      form.reset();
    }
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
          required={false}
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
