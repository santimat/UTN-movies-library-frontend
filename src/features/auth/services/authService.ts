import { handleResponseErrors } from '@/features/auth/helpers/helpers';
import { handleErrors } from '@/shared/utils/handleFetchErrors';

const BASE_URL = `/api/auth`;

const auth = async (endpoint: string, payload: object) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
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
  logout: async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        credentials: 'include',
        method: 'POST',
      });
    } catch (error) {
      handleErrors(error);
    }
  },
  checkAuth: async () => {
    const res = await fetch(`${BASE_URL}/user`, {
      credentials: 'include',
    });

    handleResponseErrors(res);
    return await res.json();
  },
  checkAdmin: async () => {
    const res = await fetch(`${BASE_URL}/admin`, {
      credentials: 'include',
    });
    handleResponseErrors(res);
    return await res.json();
  },
};
