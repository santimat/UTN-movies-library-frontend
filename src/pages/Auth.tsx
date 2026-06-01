import { LoginForm } from '@/components/layout/LoginForm';

export function Auth() {
  return (
    <>
      <h1 className="mb-10 text-center font-body text-3xl font-bold uppercase">
        Accede a tu <span className="text-secondary">biblioteca</span>
      </h1>
      <div className="flex justify-center gap-10 font-body">
        <LoginForm />
      </div>
    </>
  );
}
