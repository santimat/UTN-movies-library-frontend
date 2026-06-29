import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useUsersStore } from '@/features/admin/store/useUsersStore';

export function useUsers(filters: Record<string, string>, limit = '3') {
  const { users, error, fetchUsers, currentPage, totalElements, totalPages } =
    useUsersStore(
      useShallow((s) => ({
        users: s.users,
        error: s.error,
        currentPage: s.data.currentPage,
        totalPages: s.data.totalPages,
        totalElements: s.data.totalElements,
        fetchUsers: s.fetchUsers,
      }))
    );

  useEffect(() => {
    fetchUsers({ ...filters, size: limit });
  }, [fetchUsers, filters, limit]);

  return {
    users,
    error,
    fetchUsers,
    currentPage,
    totalElements,
    totalPages,
  };
}
