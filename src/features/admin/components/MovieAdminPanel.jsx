import { Button } from '@/shared/components/ui/Button';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export function MovieAdminPanel() {
  const isDesktop = useMediaQuery('(min-width:768px)');
  return (
    <section className="mx-auto mt-10 w-[80%] text-neutral">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-lg text-balance">Administración de películas</h2>
        <Button className="bg-tertiary font-bold text-white uppercase">
          Añadir
        </Button>
      </div>
      <div role="table" className="mt-10 border-2 border-neutral uppercase">
        <div
          role="rowgroup"
          className="grid grid-cols-2 bg-neutral/60 p-2 font-bold text-white md:grid-cols-6"
        >
          <h4 role="columnheader" className="lg:col-span-2">
            Título
          </h4>
          {isDesktop && (
            <>
              <h4 role="columnheader">Genre</h4>
              <h4 role="columnheader">Year</h4>
              <h4 role="columnheader">Rating</h4>
            </>
          )}
          <h4 role="columnheader">Actions</h4>
        </div>
        <div></div>
      </div>
    </section>
  );
}
