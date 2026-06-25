import { useState } from 'react';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export function FormField({
  label,
  type = 'text',
  placeholder,
  required = true,
  name,
  onChangeValue,
  value: inputValue,
}: FormFieldProps) {
  const controlledInputValue = inputValue ? { value: inputValue } : {};
  const defaultHandler = onChangeValue ? { onChange: onChangeValue } : {};

  return (
    <label className="flex flex-col font-semibold tracking-wide uppercase outline-tertiary has-focus:text-tertiary">
      {label}
      <input
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
