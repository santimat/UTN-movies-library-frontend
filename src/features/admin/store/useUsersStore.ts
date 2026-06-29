import { create } from 'zustand';
import { type AppError, type User } from '@/shared/types';
import { userService } from '@/features/admin/services/userService';
import type { GetUsersProps } from '@/features/admin/types';

type UsersStore = {
  users: User[];
  error: AppError | null;
  data: {
    totalPages: number;
    totalElements: number;
    currentPage: number;
  };
  fetchUsers: (filters: GetUsersProps) => Promise<void>;
  updateUserRole: (userId: number, role: string) => Promise<void>;
};

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  error: null,
  data: {
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
  },
  fetchUsers: async (filters: GetUsersProps) => {
    try {
      const { users, ...data } = await userService.getUsers(filters);
      set({
        users,
        data,
      });
    } catch (err) {
      set({ error: err as AppError });
    }
  },
  updateUserRole: async (userId: number, role: string) => {
    const updatedUser = await userService.updateUserRole(userId, role);
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    }));
  },
}));
