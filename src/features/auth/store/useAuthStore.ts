import { authService } from '@/features/auth/services/authService';
import type { UserResponse } from '@/features/auth/types';
import type { AppError } from '@/shared/types';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  loading: boolean;
  error: AppError | null;
  setLoading: (loading: boolean) => void;
  hydrateUser: (role?: 'admin' | 'user') => void;
  setUser: (user: UserResponse | null) => void;
  login: (formData: FormData) => Promise<void>;
  register: (formData: FormData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<UseAuthStore>((set, get) => ({
  user: null,
  error: null,
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  setUser: (user: UserResponse | null) => set({ user }),
  hydrateUser: async (role: 'admin' | 'user' = 'user') => {
    try {
      const user = await (role === 'user'
        ? authService.checkAuth()
        : authService.checkAdmin());
      set({ user });
    } catch (error) {
      set({ error: error as AppError, user: null });
    } finally {
      set({ loading: false });
    }
  },
  login: async (formData: FormData) => {
    try {
      const user = await authService.login(formData);
      set({ user, error: null });
    } catch (error) {
      set({ error: error as AppError });
      throw error;
    }
  },
  register: async (formData: FormData) => {
    try {
      await authService.register(formData);
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
    } finally {
      set({ loading: false });
    }
  },
}));
