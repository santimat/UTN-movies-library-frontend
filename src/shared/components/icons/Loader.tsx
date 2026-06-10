import type { SvgProps } from '@/shared/types';

export function LoaderIcon({
  width = 32,
  height = 32,
  className: classes,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      className={classes}
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path d="M3 12a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9" />
      <path d="M17 12a5 5 0 1 0-5 5" />
    </svg>
  );
}
