import type { UserResponse } from '@/types/entities/User';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  loading: boolean;
  setUser: (user: UserResponse) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user: UserResponse) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),
}));
