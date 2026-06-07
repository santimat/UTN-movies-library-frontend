import { useId, useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { LOGIN_FIELDS } from '@/shared/utils/constants';
import { areMissingFields } from '@/shared/utils/checkMissingFields';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { FormField } from '@/features/auth/components/FormField';
import { AuthForm } from '@/features/auth/components/AuthForm';

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
    if (areMissingFields(formData, LOGIN_FIELDS)) return;
    const error = await login(formData);
    if (error) return toast.error(error.error);
    event.target.reset();
    navigate('/');
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
          required={false}
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
