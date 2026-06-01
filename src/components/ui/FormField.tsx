interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  required = true,
}: FormFieldProps) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col font-semibold tracking-wide uppercase has-focus:text-secondary"
    >
      {label}
      <input
        id={id}
        type={type}
        required={required}
        className="border:outline-secondary border-2 border-b-4 border-neutral/60 border-b-neutral p-2 placeholder:text-neutral/40 focus:border-secondary focus:outline-0"
        placeholder={placeholder}
      />
    </label>
  );
}
