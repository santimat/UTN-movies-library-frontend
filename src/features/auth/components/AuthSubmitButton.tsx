interface AuthSubmitButtonProps {
  className?: string;
  value: string;
}

export function AuthSubmitButton({
  value: buttonValue,
}: AuthSubmitButtonProps) {
  return (
    <input
      type="submit"
      value={buttonValue}
      className={`mt-6 w-full py-2 font-semibold tracking-wider text-white uppercase shadow-auth transition-transform hover:scale-102 hover:cursor-pointer active:scale-95`}
    />
  );
}
