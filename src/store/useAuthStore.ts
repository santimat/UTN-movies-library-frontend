import type { UserResponse } from '@/types/entities/User';
import { create } from 'zustand';

interface UseAuthStore {
  user: UserResponse | null;
  setUser: (user: UserResponse) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  user: null,
  setUser: (user: UserResponse) => set({ user }),
}));
