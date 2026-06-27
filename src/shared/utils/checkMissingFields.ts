export const getMissingFields = (
  payload: Record<string, unknown>,
  FIELDS_DICTIONARY: Record<string, string | boolean>
) => {
  const missingFields = Object.keys(payload).filter((field) => {
    if (FIELDS_DICTIONARY[field]) {
      const value = payload[field];
      console.log(field, value);
      if (typeof value === 'boolean') return false;
      return !value || value.toString().trim() === '';
    }
  });

  if (missingFields.length) {
    const parsedMissingFields = missingFields.map((field) => {
      return FIELDS_DICTIONARY[field as keyof typeof FIELDS_DICTIONARY];
    });

    return `${parsedMissingFields.length > 1 ? 'los siguientes campos: ' : 'el campo: '} ${parsedMissingFields.join(', ')}`;
  }
};
