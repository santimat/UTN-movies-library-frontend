import { useId, useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { LOGIN_FIELDS } from '@/lib/constants';
import { authService } from '@/services/authService';
import { validateService } from '@/services/validateService';
import { useAuthStore } from '@/stores/useAuthStore';
import { FormField } from '@/components/ui/FormField';
import { AuthForm } from '@/components/ui/AuthForm';

export function LoginForm() {
  const [remember, setRemember] = useState(false);
  const { setUser } = useAuthStore();
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();

  const handleRemember = () => setRemember((prev) => !prev);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (validateService.areMissingFields(formData, LOGIN_FIELDS)) return;
    const res = await authService.login(formData);
    if (res.code === 'INVALID_CREDENTIALS' || res.code === 'USER_NOT_FOUND')
      return toast.error(res.error);

    if (res.code === 'UNKNOWN_ERROR') return toast.error(res.error);
    setUser(res);
    if (res?.role === 'ADMIN') return navigate('/admin');
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
