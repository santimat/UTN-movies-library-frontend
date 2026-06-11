interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
}

export function AuthFormField({
  id,
  label,
  type = 'text',
  placeholder,
  required = true,
  name,
}: FormFieldProps) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col font-semibold tracking-wide uppercase outline-tertiary has-focus:text-tertiary"
    >
      {label}
      <input
        id={id}
        type={type}
        required={required}
        name={name}
        className="border-2 border-b-4 border-neutral/60 border-b-neutral p-2 outline-tertiary placeholder:text-neutral/40 focus:border-tertiary focus:outline-0"
        placeholder={placeholder}
      />
    </label>
  );
}
