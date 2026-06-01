import { useId } from 'react';
import { NavLink } from 'react-router';

export function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  return (
    <div className="w-4/5 border-4 border-neutral p-4 shadow-auth">
      <h2 className="text-body mb-4 w-fit border-b-2 border-neutral text-2xl font-bold text-neutral uppercase">
        Auth
      </h2>
      <form>
        <div className="flex flex-col gap-6">
          <label
            htmlFor={emailId}
            className="flex flex-col font-semibold tracking-wide uppercase has-focus:text-secondary"
          >
            Email
            <input
              id={emailId}
              type="email"
              required
              className="border:outline-secondary border-2 border-b-4 border-neutral/60 border-b-neutral p-2 placeholder:text-neutral/40 focus:border-secondary focus:outline-0"
              placeholder="user@example.com"
            />
          </label>
          <label
            htmlFor={passwordId}
            className="flex flex-col font-semibold tracking-wide uppercase has-focus:text-secondary"
          >
            Contraseña
            <input
              id={passwordId}
              type="password"
              required
              className="border:outline-secondary border-2 border-b-4 border-neutral/60 border-b-neutral p-2 placeholder:text-neutral/40 focus:border-secondary focus:outline-0"
              placeholder="*********"
            />
          </label>
        </div>
        <NavLink
          to={'/forgot-password'}
          className={'mt-4 block text-right text-secondary hover:underline'}
        >
          Olvidaste tu contraseña?
        </NavLink>
        <input
          type="submit"
          className="mt-6 w-full bg-neutral py-2 font-semibold tracking-wider text-white uppercase shadow-auth transition-transform hover:scale-102 hover:cursor-pointer active:scale-95"
        />
      </form>
    </div>
  );
}
