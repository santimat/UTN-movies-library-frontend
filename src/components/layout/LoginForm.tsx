import { useId, useState } from 'react';
import { FormField } from '@/components/ui/FormField';

import { AuthForm } from '@/components/ui/AuthForm';

export function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const [remember, setRemember] = useState(false);
  const handleRemember = () => setRemember((prev) => !prev);

  return (
    <div className="w-full">
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
      <div className="relative bottom-0 mx-auto mt-10 flex w-4/5 items-center">
        <div className="absolute w-full bg-neutral p-1"></div>
        <span className="relative mx-auto border-3 border-neutral bg-secondary px-4 py-2 text-2xl font-bold text-white">
          OR
        </span>
      </div>
    </div>
  );
}
