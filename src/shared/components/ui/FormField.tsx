interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | null;
  className?: string;
  disabled?: boolean;
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  required = true,
  name,
  disabled = false,
  onChangeValue,
  value: inputValue,
  className: classes,
}: FormFieldProps) {
  const controlledInputValue = inputValue != null ? { value: inputValue } : {};
  const defaultHandler =
    onChangeValue != null ? { onChange: onChangeValue } : {};

  return (
    <label
      className={`flex flex-col font-semibold tracking-wide uppercase outline-tertiary has-focus:text-tertiary ${classes}`}
    >
      {label}
      <input
        disabled={disabled}
        type={type}
        required={required}
        name={name}
        className="border-2 border-b-4 border-neutral/60 border-b-neutral p-2 outline-tertiary placeholder:text-neutral/40 focus:border-tertiary focus:outline-0"
        placeholder={placeholder}
        {...controlledInputValue}
        {...defaultHandler}
      />
    </label>
  );
}
