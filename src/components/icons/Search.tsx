import { type SvgProps } from '@/types/SvgProps';
export function SearchIcon({
  width = 32,
  height = 32,
  className: classes,
}: SvgProps) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#607d8b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
    >
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
}
