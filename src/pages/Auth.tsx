import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';

export function Auth() {
  return (
    <>
      <h1 className="mb-10 text-center font-body text-2xl font-bold uppercase md:text-3xl">
        Accede a tu <span className="text-secondary">biblioteca</span>
      </h1>
      <div className="flex flex-col justify-center gap-8 font-body md:flex-row md:items-start md:px-10">
        <LoginForm />
        <RegisterForm />
      </div>
    </>
  );
}
