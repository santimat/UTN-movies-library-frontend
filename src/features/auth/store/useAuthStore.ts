import { authService } from '@/features/auth/services/authService';
import type { AuthRequest, UserResponse } from '@/features/auth/types';
import type { AppError } from '@/shared/types';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  error: AppError | null;
  loading: boolean;
  hydrateUser: (role?: 'admin' | 'me') => void;
  login: (loginData: Partial<AuthRequest>) => Promise<void>;
  register: (registerData: Partial<AuthRequest>) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: null,
  error: null,
  loading: true,
  hydrateUser: async (role: 'admin' | 'me' = 'me') => {
    try {
      const user = await (role === 'me'
        ? authService.checkAuth()
        : authService.checkAdmin());
      set({ user, loading: false });
    } catch (error) {
      set({ error: error as AppError, user: null, loading: false });
    }
  },
  login: async (loginData: Partial<AuthRequest>) => {
    const user = await authService.login(loginData);
    set({ user, error: null });
  },
  register: async (registerData: Partial<AuthRequest>) => {
    await authService.register(registerData);
  },
  logout: async () => {
    await authService.logout();
    set({ user: null });
  },
}));
