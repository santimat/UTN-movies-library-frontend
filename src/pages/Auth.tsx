import { LoginForm } from '@/components/layout/LoginForm';
import { RegisterForm } from '@/components/layout/RegisterForm';

export function Auth() {
  return (
    <>
      <h1 className="mb-10 text-center font-body text-3xl font-bold uppercase">
        Accede a tu <span className="text-secondary">biblioteca</span>
      </h1>
      <div className="flex flex-col items-center gap-10 font-body">
        <LoginForm />
        <div className="relative flex w-4/5 items-center">
          <div className="absolute w-full bg-neutral p-1"></div>
          <span className="relative z-10 mx-auto border-3 border-neutral bg-secondary px-4 py-2 text-2xl font-bold text-white">
            OR
          </span>
        </div>
        <RegisterForm />
      </div>
    </>
  );
}
