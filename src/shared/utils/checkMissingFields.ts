export const areMissingFields = (
  payload: Record<string, unknown>,
  FIELDS_DICTIONARY: Record<string, string>
) => {
  const missingFields = Object.keys(payload).filter((field) => {
    const value = payload[field];
    if (typeof value === 'boolean') return false;
    return !value || value.toString().trim() === '';
  });

  if (missingFields.length) {
    return missingFields.map((field) => {
      return FIELDS_DICTIONARY[field as keyof typeof FIELDS_DICTIONARY];
    });
  }
};
