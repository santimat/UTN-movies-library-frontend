import { authService } from '@/services/authService';
import type { UserResponse } from '@/types/entities/User';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  hydrateUser: (role?: 'admin' | 'user') => void;
  setUser: (user: UserResponse | null) => void;
  isAuthenticated: () => boolean;
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
  isAuthenticated: () => {
    return !!get().user?.email;
  },
}));
