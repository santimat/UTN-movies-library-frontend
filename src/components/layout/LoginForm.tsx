import { useId, useState, type SubmitEvent } from 'react';
import { FormField } from '@/components/ui/FormField';

import { AuthForm } from '@/components/ui/AuthForm';
import { LOGIN_FIELDS } from '@/lib/constants';
import { validateService } from '@/services/validateService';

export function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const [remember, setRemember] = useState(false);
  const handleRemember = () => setRemember((prev) => !prev);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (validateService.areMissingFields(formData, LOGIN_FIELDS)) return;
  };

  return (
    <div className="w-full">
      <AuthForm
        onSubmit={handleSubmit}
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
          name="email"
          placeholder="user@example.com"
        />
        <FormField
          name="password"
          id={passwordId}
          label="contraseña"
          type="password"
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
