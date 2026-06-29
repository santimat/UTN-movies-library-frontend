import { useUsers } from '@/features/admin/hooks/useUsers';
import { UsersManagementList } from '@/features/admin/components/UsersManagementList';
import { Pagination } from '@/shared/components/ui/Pagination';
import { useFilters } from '@/shared/hooks/useFilters';
import { DEFAULT_USER_FILTERS } from '@/shared/utils/constants';
import { SearchInput } from '@/shared/components/ui/SearchInput';
import { Button } from '@/shared/components/ui/Button';

export function UserAdminPanel() {
  const { filters, updateFilters } = useFilters(DEFAULT_USER_FILTERS);
  const { users, totalPages, currentPage } = useUsers(filters);

  const handleRoleFilter = (role: string) => {
    if (filters.role === role) return updateFilters({ role: '' });
    updateFilters({ role });
  };

  const roleFilterButtonClasses = `text-md! px-2! py-0! font-semibold!`;

  return (
    <section className="mx-auto mt-10 w-[90%]">
      <div>
        <h2 className="px-2 text-xl font-bold uppercase">Usuarios</h2>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <SearchInput updateText={updateFilters} placeholder="Carlito teve" />
        <div className="flex gap-2">
          <Button
            className={`${roleFilterButtonClasses} ${filters.role === 'ADMIN' ? 'bg-neutral text-white' : ''}`}
            onClick={() => handleRoleFilter('ADMIN')}
          >
            Admin
          </Button>
          <Button
            className={`${roleFilterButtonClasses} ${filters.role === 'USER' ? 'bg-neutral text-white' : ''}`}
            onClick={() => handleRoleFilter('USER')}
          >
            Regular
          </Button>
        </div>
      </div>
      <UsersManagementList users={users} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        updatePage={updateFilters}
      />
    </section>
  );
}
