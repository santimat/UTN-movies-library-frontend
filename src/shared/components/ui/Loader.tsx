import { LoaderIcon } from '@/shared/components/icons/Loader';

export function Loader() {
  return (
    <div className="flex h-full animate-spin items-center justify-center">
      <LoaderIcon className="stroke-neutral" />
    </div>
  );
}
