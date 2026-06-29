import { sileo } from 'sileo';
import type { AppError, User } from '@/shared/types';
import { useUserActions } from '@/features/admin/hooks/useUserActions';

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  const isAdmin = user.role === 'ADMIN';
  const { updateUserRole } = useUserActions();
  const handleChangeRole = async (role: string) => {
    try {
      await updateUserRole(user.id, role);
      sileo.success({
        title: 'Rol del usuario actualizado',
        description: `El rol del usuario ${user.name} ha sido cambiado a ${role}`,
      });
    } catch (err) {
      const { error } = err as AppError;
      sileo.error({
        title: 'Error al cambiar el rol del usuario',
        description: error,
      });
    }
  };

  return (
    <article className="grid grid-cols-[60px_2fr_2fr] gap-2 border-4 border-neutral p-2">
      <img
        src={user.pfpUrl || 'pfp-placeholder.webp'}
        className="h-14 w-14 border-2 border-neutral"
      />
      <div>
        <p className="font-semibold first-letter:uppercase">{user.name}</p>
        <small>{user.email}</small>
      </div>
      <div className="flex items-center justify-end font-semibold">
        <button
          className={`border-2 border-neutral p-1 uppercase ${isAdmin ? 'bg-secondary text-white' : 'hover:cursor-pointer hover:bg-neutral hover:text-white'}`}
          disabled={isAdmin}
          onClick={() => handleChangeRole('ADMIN')}
        >
          admin
        </button>
        <button
          className={`border-2 border-neutral p-1 uppercase ${!isAdmin ? 'bg-tertiary text-white' : 'hover:cursor-pointer hover:bg-neutral hover:text-white'}`}
          disabled={!isAdmin}
          onClick={() => handleChangeRole('USER')}
        >
          reg
        </button>
      </div>
    </article>
  );
}
