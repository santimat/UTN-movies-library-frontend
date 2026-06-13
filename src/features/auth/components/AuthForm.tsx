import { AuthSubmitButton } from '@/features/auth/components/AuthSubmitButton';
import type { ReactNode, SubmitEvent } from 'react';

interface AuthFormProps {
  title: string;
  children: ReactNode;
  submitLabel: string;
  onSubmit?: (e: SubmitEvent<HTMLFormElement>) => void;
  className?: string;
}
export function AuthForm({
  title,
  children: fields,
  submitLabel,
  onSubmit,
  className: formClasses,
}: AuthFormProps) {
  return (
    <div className="relative mx-auto w-4/5 border-4 border-neutral p-4 shadow-auth md:w-full">
      <h2 className="text-body mb-4 w-fit border-b-2 border-neutral text-2xl font-bold text-neutral uppercase">
        {title}
      </h2>
      <form onSubmit={onSubmit} className={formClasses}>
        <div className="flex flex-col gap-6">{fields}</div>

        <AuthSubmitButton value={submitLabel} />
      </form>
    </div>
  );
}
