import { API_URL } from '@/lib/constants';
// import type { RegisterUser } from '@/types/entities/User';
const BASE_URL = `${API_URL}/users`;

export const authService = {
  register: async (formData: FormData) => {
    const userData = {
      name: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
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
};
