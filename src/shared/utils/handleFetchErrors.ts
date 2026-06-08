export const handleErrors = (error: unknown) => {
  if (error instanceof Error)
    throw {
      code: 'NETWORK_ERROR',
      error:
        'No se pudo conectar al servidor. Por favor, verifica tu conexión.',
    };

  if (error && typeof error === 'object' && 'code' in error && 'error' in error)
    throw error;

  throw {
    code: 'UNKNOWN_ERROR',
    error: 'Ocurrió un error desconocido. Por favor, intenta nuevamente.',
  };
};
