import { LoaderIcon } from '@/shared/components/icons/Loader';

export function Loader() {
  return (
    <div className="absolute inset-0 flex animate-spin items-center justify-center">
      <LoaderIcon className="stroke-neutral" />
    </div>
  );
}
