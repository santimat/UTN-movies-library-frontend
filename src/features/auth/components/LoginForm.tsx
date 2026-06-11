import { useId, useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { LOGIN_FIELDS } from '@/shared/utils/constants';
import { areMissingFields } from '@/shared/utils/checkMissingFields';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { AuthFormField } from '@/features/auth/components/AuthFormField';
import { AuthForm } from '@/features/auth/components/AuthForm';
import type { AppError } from '@/shared/types';

export function LoginForm() {
  const [remember, setRemember] = useState(false);
  const login = useAuthStore((s) => s.login);
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();

  const handleRemember = () => setRemember((prev) => !prev);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;

    if (areMissingFields(formData, LOGIN_FIELDS)) return;
    try {
      await login(formData);
      navigate('/');
    } catch (err) {
      const { error } = err as AppError;
      toast.error(error);
    } finally {
      form.reset();
    }
  };

  return (
    <div className="w-full">
      <AuthForm
        onSubmit={handleSubmit}
        title="Iniciar Sesión"
        submitLabel="iniciar sesión"
        onRememberMeChange={handleRemember}
        rememberMe={remember}
        showForgotPassword
        showRememberMe
      >
        <AuthFormField
          id={emailId}
          label="email"
          type="email"
          name="email"
          placeholder="user@example.com"
        />
        <AuthFormField
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
