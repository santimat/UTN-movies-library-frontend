import { useId, type SubmitEvent } from 'react';
import { toast } from 'sonner';
import { REGISTER_FIELDS } from '@/shared/utils/constants';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
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
    const form = event.currentTarget;
    const formData = new FormData(form);
    const registerData = Object.fromEntries(formData.entries());

    if (areMissingFields(registerData, REGISTER_FIELDS)) return;

    try {
      await register(registerData);
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
        <AuthFormField
          id={usernameId}
          label="Nombre de usuario"
          type="text"
          placeholder="pepegamer"
          name="name"
          required={false}
        />
        <AuthFormField
          id={emailId}
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
          name="email"
        />
        <AuthFormField
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
