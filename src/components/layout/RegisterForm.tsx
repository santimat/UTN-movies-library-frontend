import { AuthForm } from '@/components/ui/AuthForm';
import { FormField } from '@/components/ui/FormField';
import { useId } from 'react';

export function RegisterForm() {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <AuthForm title="Regístrate" submitLabel="Registrarse">
      <FormField
        id={usernameId}
        label="Nombre de usuario"
        type="text"
        placeholder="pepegamer"
        required
      />
      <FormField
        id={emailId}
        label="Correo electrónico"
        type="email"
        placeholder="user@example.com"
        required
      />
      <FormField
        id={passwordId}
        label="Contraseña"
        type="password"
        placeholder="***********"
      />
    </AuthForm>
  );
}
