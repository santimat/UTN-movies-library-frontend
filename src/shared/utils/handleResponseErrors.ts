import { type AppError } from '@/shared/types';

const DEFAULT_HTTP_ERRORS: Partial<Record<number, AppError>> = {
  400: { code: 'BAD_REQUEST', error: 'Solicitud incorrecta.' },
  401: { code: 'INVALID_CREDENTIALS', error: 'Contraseña incorrecta.' },
  403: {
    code: 'FORBIDDEN',
    error: 'No tienes permiso para acceder a este recurso.',
  },
  404: { code: 'NOT_FOUND', error: 'El recurso no fue encontrado.' },
  409: { code: 'ALREADY_EXISTS', error: 'El recurso ya existe.' },
};

export const handleResponseErrors = (
  res: Response,
  overrides?: Partial<Record<number, AppError>>
): void => {
  if (res.ok) return;

  const errors = { ...DEFAULT_HTTP_ERRORS, ...overrides };
  const knownError = errors[res.status];
  if (knownError) throw knownError;

  throw {
    code: 'SERVER_ERROR',
    error: 'Ocurrió un error en el servidor. Por favor, intenta nuevamente.',
  };
};
