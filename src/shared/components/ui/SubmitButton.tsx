interface SubmitButtonProps {
  className?: string;
  value: string;
}

export function SubmitButton({
  value: buttonValue,
  className: classes,
}: SubmitButtonProps) {
  return (
    <input
      type="submit"
      value={buttonValue}
      className={`${classes} mt-6 w-full py-2 font-semibold tracking-wider text-white uppercase shadow-auth transition-transform hover:scale-102 hover:cursor-pointer active:scale-95`}
    />
  );
}
