import { LoaderIcon } from '@/shared/components/icons/Loader';

export function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <span className="animate-spin">
        <LoaderIcon className="stroke-neutral" />
      </span>
    </div>
  );
}
