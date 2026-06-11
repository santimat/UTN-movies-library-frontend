import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import type { AuthRequest } from '@/features/auth/types';

const BASE_URL = `/api/auth`;

const auth = async (endpoint: string, payload: Partial<AuthRequest>) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    handleResponseErrors(res, {
      409: {
        code: 'EMAIL_ALREADY_EXISTS',
        error: 'El correo ya está registrado.',
      },
    });

    return await res.json();
  } catch (error) {
    throw handleFetchErrors(error);
  }
};

export const authService = {
  register: async (registerData: Partial<AuthRequest>) => {
    try {
      return await auth('register', registerData);
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  login: async (loginData: Partial<AuthRequest>) => {
    try {
      return await auth('login', loginData);
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  logout: async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        credentials: 'include',
        method: 'POST',
      });
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  checkAuth: async () => {
    try {
      const res = await fetch(`${BASE_URL}/me`, {
        credentials: 'include',
      });

      handleResponseErrors(res);
      return await res.json();
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
  checkAdmin: async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin`, {
        credentials: 'include',
      });
      handleResponseErrors(res);
      return await res.json();
    } catch (error) {
      throw handleFetchErrors(error);
    }
  },
};
