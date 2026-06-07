import type { SvgProps } from '@/types/SvgProps';

export function LoaderIcon({
  width = 32,
  height = 32,
  className: classes,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={classes}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#607d8b"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9" />
      <path d="M17 12a5 5 0 1 0 -5 5" />
    </svg>
  );
}
