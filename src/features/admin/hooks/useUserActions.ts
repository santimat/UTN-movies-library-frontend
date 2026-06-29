import { useShallow } from 'zustand/shallow';
import { useUsersStore } from '@/features/admin/store/useUsersStore';

export function useUserActions() {
  const { updateUserRole } = useUsersStore(
    useShallow((s) => ({
      updateUserRole: s.updateUserRole,
    }))
  );

  return {
    updateUserRole,
  };
}
