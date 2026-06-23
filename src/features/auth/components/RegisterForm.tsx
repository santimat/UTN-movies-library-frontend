import { useId, type SubmitEvent } from 'react';
import { sileo } from 'sileo';
import { REGISTER_FIELDS } from '@/shared/utils/constants';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
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

    const missingFields = getMissingFields(registerData, REGISTER_FIELDS);

    if (missingFields) {
      return sileo.warning({
        title: 'Campos faltantes',
        description: `Por favor, completa ${missingFields}`,
      });
    }

    try {
      await register(registerData);
      sileo.success({
        title: 'Registro exitoso',
        description: 'Ahora puedes iniciar sesión con tus credenciales.',
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al registrarse',
        description: error,
      });
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
        className='[&>input[type="submit"]]:bg-tertiary'
      >
        <AuthFormField
          id={usernameId}
          label="Nombre de usuario"
          type="text"
          placeholder="pepegamer"
          name="name"
        />
        <AuthFormField
          id={emailId}
          label="Correo electrónico"
          type="email"
          placeholder="user@example.com"
          name="email"
          required={false}
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
