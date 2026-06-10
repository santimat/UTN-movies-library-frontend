export const handleFetchErrors = (error: unknown): never => {
  if (error && typeof error === 'object' && 'code' in error && 'error' in error)
    throw error;

  if (error instanceof TypeError)
    throw {
      code: 'NETWORK_ERROR',
      error: 'No se pudo conectar con el servidor.',
    };

  if (error instanceof SyntaxError)
    throw { code: 'PARSE_ERROR', error: 'Respuesta inválida del servidor.' };

  throw {
    code: 'UNKNOWN_ERROR',
    error: 'Ocurrió un error desconocido. Por favor, intenta nuevamente.',
  };
};
