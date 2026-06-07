const BASE_URL = `/api`;

const handleResponseErrors = (res: Response) => {
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

const handleErrors = (error: unknown) => {
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

const auth = async (endpoint: string, payload: object) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    handleResponseErrors(res);
    return await res.json();
  } catch (error) {
    handleErrors(error);
  }
};

export const authService = {
  register: async (formData: FormData) => {
    const registerData = {
      name: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    return await auth('register', registerData);
  },
  login: async (formData: FormData) => {
    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
      remember: formData.get('rememberMe') === 'on',
    };
    return await auth('login', loginData);
  },
  checkAuth: async () => {
    const res = await fetch(`${BASE_URL}/auth/user`, {
      credentials: 'include',
    });

    handleResponseErrors(res);
    return await res.json();
  },
  checkAdmin: async () => {
    const res = await fetch(`${BASE_URL}/auth/admin`, {
      credentials: 'include',
    });
    handleResponseErrors(res);
    return await res.json();
  },
};
