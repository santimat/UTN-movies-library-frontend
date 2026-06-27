import { useCallback, useState, type SubmitEvent } from 'react';
import { useNavigate, Link } from 'react-router';

import type { AppError } from '@/shared/types';
import { LOGIN_FIELDS } from '@/shared/utils/dictionaries';
import { CheckBox } from '@/shared/components/icons/CheckBox';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import { getMissingFields } from '@/shared/utils/checkMissingFields';
import { FormField } from '@/shared/components/ui/FormField';
import { sileo } from 'sileo';

export function LoginForm() {
  const navigate = useNavigate();

  const [remember, setRemember] = useState(false);

  const login = useAuthStore((s) => s.login);
  const handleRemember = useCallback(() => setRemember((prev) => !prev), []);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const loginData = {
      ...Object.fromEntries(formData.entries()),
      remember,
    };
    const missingFields = getMissingFields(loginData, LOGIN_FIELDS);
    if (missingFields) {
      return sileo.warning({
        title: 'Campos faltantes',
        description: `Por favor, completa ${missingFields}`,
      });
    }

    try {
      await login(loginData);
      navigate('/');
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al iniciar sesión',
        description: error,
      });
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
        className='[&>input[type="submit"]]:bg-secondary'
      >
        <FormField
          label="email"
          type="email"
          name="email"
          placeholder="user@example.com"
        />
        <FormField
          name="password"
          label="contraseña"
          type="password"
          placeholder="***********"
        />
        <label className="flex items-center gap-2 font-semibold select-none">
          <input
            type="checkbox"
            name="rememberMe"
            className="peer sr-only"
            onChange={handleRemember}
          />
          <span className="transition-transform peer-focus-visible:ring-2 peer-focus-visible:ring-tertiary hover:scale-105 hover:cursor-pointer active:scale-95">
            {remember ? <CheckBox /> : <CheckBox empty />}
          </span>
          <span>Mantener la sesión iniciada</span>
        </label>
        <Link
          to={'/forgot-password'}
          className={'mt-4 ml-auto w-fit text-secondary hover:underline'}
        >
          Olvidaste tu contraseña?
        </Link>
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
