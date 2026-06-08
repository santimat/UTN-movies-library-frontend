import { authService } from '@/features/auth/services/authService';
import type { UserResponse } from '@/features/auth/types';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  hydrateUser: (role?: 'admin' | 'user') => void;
  setUser: (user: UserResponse | null) => void;
  login: (
    formData: FormData
  ) => Promise<void | { code: string; error: string }>;
  register: (
    formData: FormData
  ) => Promise<void | { code: string; error: string }>;
  logout: () => Promise<void | { code: string; error: string }>;
}

export const useAuthStore = create<UseAuthStore>((set, get) => ({
  user: null,
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
  setUser: (user: UserResponse | null) => set({ user }),
  hydrateUser: async (role: 'admin' | 'user' = 'user') => {
    set({ loading: true });
    try {
      const user = await (role === 'user'
        ? authService.checkAuth()
        : authService.checkAdmin());
      set({ user });
    } catch {
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },
  login: async (formData: FormData) => {
    try {
      const user = await authService.login(formData);
      set({ user });
    } catch (error) {
      return error as { code: string; error: string };
    }
  },
  register: async (formData: FormData) => {
    try {
      await authService.register(formData);
    } catch (error) {
      return error as { code: string; error: string };
    }
  },
  logout: async () => {
    try {
      await authService.logout();
      set({ user: null });
    } catch (error) {
      return error as { code: string; error: string };
    } finally {
      set({ loading: false });
    }
  },
}));
