import type { SubmitEvent } from 'react';

interface AuthSubmitButtonProps {
  className?: string;
  value: string;
  handleSubmit?: (event: SubmitEvent) => void;
}

export function AuthSubmitButton({
  className: classes,
  value: buttonValue,
  handleSubmit,
}: AuthSubmitButtonProps) {
  return (
    <input
      type="submit"
      onSubmit={handleSubmit}
      value={buttonValue}
      className={`${classes} mt-6 w-full py-2 font-semibold tracking-wider text-white uppercase shadow-auth transition-transform hover:scale-102 hover:cursor-pointer active:scale-95`}
    />
  );
}
