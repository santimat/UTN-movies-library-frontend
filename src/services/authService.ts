const BASE_URL = `/api`;

export const authService = {
  register: async (formData: FormData) => {
    const registerData = {
      name: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const res = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (res.status === 409) {
      return {
        code: 'ALREADY_EXISTS',
        error:
          'El correo electrónico ya está registrado. Por favor, utiliza otro.',
      };
    }

    if (!res.ok) {
      return {
        code: 'ALREADY_EXISTS',
        error:
          'El correo electrónico ya está registrado. Por favor, utiliza otro.',
      };
    }

    return await res.json();
  },
  login: async (formData: FormData) => {
    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (res.status === 401)
      return {
        code: 'INVALID_CREDENTIALS',
        error: 'Contraseña incorrecta.',
      };

    if (res.status === 404)
      return {
        code: 'USER_NOT_FOUND',
        error: 'No se encontró un usuario con ese correo electrónico.',
      };

    if (!res.ok)
      return {
        code: 'UNKNOWN_ERROR',
        error: 'Ocurrió un error desconocido. Por favor, intenta nuevamente.',
      };

    return await res.json();
  },
  checkAcces: async (role: 'user' | 'admin') => {
    const res = await fetch(`${BASE_URL}/auth/${role}`, {
      credentials: 'include',
    });
    return res;
  },
};
