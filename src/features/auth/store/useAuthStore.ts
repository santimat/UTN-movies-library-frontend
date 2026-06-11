import { authService } from '@/features/auth/services/authService';
import type { AuthRequest, UserResponse } from '@/features/auth/types';
import type { AppError } from '@/shared/types';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  error: AppError | null;
  hydrateUser: (role?: 'admin' | 'me') => void;
  login: (loginData: Partial<AuthRequest>) => Promise<void>;
  register: (registerData: Partial<AuthRequest>) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: null,
  error: null,
  hydrateUser: async (role: 'admin' | 'me' = 'me') => {
    try {
      const user = await (role === 'me'
        ? authService.checkAuth()
        : authService.checkAdmin());
      set({ user });
    } catch (error) {
      set({ error: error as AppError, user: null });
    }
  },
  login: async (loginData: Partial<AuthRequest>) => {
    try {
      const user = await authService.login(loginData);
      set({ user, error: null });
    } catch (error) {
      set({ error: error as AppError });
      throw error;
    }
  },
  register: async (registerData: Partial<AuthRequest>) => {
    try {
      await authService.register(registerData);
      set({ error: null });
    } catch (error) {
      set({ error: error as AppError });
      throw error;
    }
  },
  logout: async () => {
    try {
      await authService.logout();
      set({ user: null });
    } catch (error) {
      set({ error: error as AppError });
    }
  },
}));
