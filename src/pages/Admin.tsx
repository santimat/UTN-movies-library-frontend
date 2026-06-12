import { MovieAdminPanel } from '@/features/admin/components/MovieAdminPanel';
export function Admin() {
  return (
    <>
      <h1 className="text-3xl font-bold uppercase">Panel de administración</h1>
      <MovieAdminPanel />
    </>
  );
}
