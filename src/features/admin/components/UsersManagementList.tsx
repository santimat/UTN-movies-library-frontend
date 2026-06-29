import type { User } from '@/shared/types';
import { UserCard } from '@/features/admin/components/UserCard';

type UsersManagementListProps = {
  users: User[];
};

export function UsersManagementList({ users }: UsersManagementListProps) {
  return (
    <ul className="my-4 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {users.map((user) => (
        <li key={`user-management-${user.id}`}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}
