import { NavLink } from 'react-router';
import { CheckBox } from '@/components/icons/CheckBox';
import { AuthSubmitButton } from '../ui/AuthSubmitButton';
import type { ReactNode, SubmitEvent } from 'react';

interface AuthFormProps {
  title: string;
  children: ReactNode;
  submitLabel: string;
  rememberMe?: boolean;
  showForgotPassword?: boolean;
  onSubmit?: (e: SubmitEvent) => void;
  showRememberMe?: boolean;
  onRememberMeChange?: () => void;
}
export function AuthForm({
  title,
  children: fields,
  submitLabel,
  showForgotPassword,
  showRememberMe,
  rememberMe,
  onRememberMeChange,
  onSubmit,
}: AuthFormProps) {
  const submitClasses = rememberMe ? 'bg-neutral' : 'bg-tertiary';

  return (
    <div className="w-4/5 border-4 border-neutral p-4 shadow-auth">
      <h2 className="text-body mb-4 w-fit border-b-2 border-neutral text-2xl font-bold text-neutral uppercase">
        {title}
      </h2>
      <form>
        <div className="flex flex-col gap-4">{fields}</div>
        {showForgotPassword && (
          <NavLink
            to={'/forgot-password'}
            className={'mt-4 block text-right text-secondary hover:underline'}
          >
            Olvidaste tu contraseña?
          </NavLink>
        )}
        {showRememberMe && (
          <label className="flex items-center gap-2 font-semibold select-none">
            <input
              type="checkbox"
              value={'true'}
              className="invisible absolute"
              onChange={onRememberMeChange}
            />
            <span className="transition-transform hover:scale-105 hover:cursor-pointer active:scale-95">
              {rememberMe ? <CheckBox /> : <CheckBox empty />}
            </span>
            Mantener la sesión iniciada
          </label>
        )}
        <AuthSubmitButton
          className={submitClasses}
          value={submitLabel}
          handleSubmit={onSubmit}
        />
      </form>
    </div>
  );
}
