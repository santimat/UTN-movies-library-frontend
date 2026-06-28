import { MovieAdminPanel } from '@/features/admin/components/MovieAdminPanel';
import { UserAdminPanel } from '@/features/admin/components/UserAdminPanel';
export function Admin() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold uppercase">
        Panel de administración
      </h1>
      <MovieAdminPanel />
      <UserAdminPanel />
    </>
  );
}
