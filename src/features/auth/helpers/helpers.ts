export const handleResponseErrors = (res: Response) => {
  if (res.status === 401)
    throw {
      code: 'INVALID_CREDENTIALS',
      error: 'Contraseña incorrecta.',
    };

  if (res.status === 404)
    throw {
      code: 'USER_NOT_FOUND',
      error: 'No se encontró un usuario con ese correo electrónico.',
    };
  if (res.status === 403)
    throw {
      code: 'FORBIDDEN',
      error: 'No tienes permiso para acceder a este recurso.',
    };
  if (res.status === 409)
    throw {
      code: 'ALREADY_EXISTS',
      error:
        'El correo electrónico ya está registrado. Por favor, utiliza otro.',
    };

  if (!res.ok)
    throw {
      code: 'SERVER_ERROR',
      error: 'Ocurrió un error en el servidor. Por favor, intenta nuevamente.',
    };
};
