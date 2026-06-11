import { CameraOffIcon } from '@/shared/components/icons/CameraOff';
import { ButtonLink } from '@/shared/components/ui/ButtonLink';

export function NotFound() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-10 pb-4 uppercase lg:flex-row xl:gap-30">
      <div className="flex h-60 w-60 items-center justify-center bg-secondary shadow-auth md:h-65 md:w-65 lg:h-80 lg:w-80 xl:h-120 xl:w-120">
        <div className="flex h-30 w-35 rotate-6 items-center justify-center border-2 border-black bg-white lg:h-55 lg:w-45 xl:h-70 xl:w-60">
          <CameraOffIcon className="h-25 w-25 text-secondary" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <ButtonLink
          className="border-black bg-secondary p-4 text-xl text-white shadow-auth"
          to="/"
        >
          Volver al inicio
        </ButtonLink>

        <h1 className="font-headline text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
          Escena
          <span className="block">no</span>
          <span className="block text-secondary">encontrada</span>
        </h1>

        <span className="border-2 border-black bg-secondary p-4 text-center text-2xl font-bold text-white shadow-auth">
          Error 404
        </span>
      </div>
    </section>
  );
}
