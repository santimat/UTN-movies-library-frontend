import { useId, useState } from 'react';
import { FormField } from '@/components/ui/FormField';

import { AuthForm } from '@/components/layout/AuthForm';

export function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const [remember, setRemember] = useState(false);
  const handleRemember = () => setRemember((prev) => !prev);

  return (
    <AuthForm
      title="Inciar Sesión"
      submitLabel="iniciar sesión"
      onRememberMeChange={handleRemember}
      rememberMe={remember}
      showForgotPassword
      showRememberMe
    >
      <FormField
        id={emailId}
        label="email"
        type="email"
        required
        placeholder="user@example.com"
      />
      <FormField
        id={passwordId}
        label="contraseña"
        type="password"
        required
        placeholder="***********"
      />
    </AuthForm>
  );
}
