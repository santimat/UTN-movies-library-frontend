import { toast } from 'sonner';

export const areMissingFields = (
  formData: FormData,
  FIELDS_DICTIONARY: Record<string, string>
) => {
  const missingFields = Array.from(formData.keys()).filter((field) => {
    const value = formData.get(field);
    return !value || value.toString().trim() === '';
  });

  if (missingFields.length) {
    const missingFieldNames = missingFields.map((field) => {
      return FIELDS_DICTIONARY[field as keyof typeof FIELDS_DICTIONARY];
    });
    return toast.error(
      `Por favor, completa los siguientes campos: ${missingFieldNames.join(', ')}`
    );
  }
};
