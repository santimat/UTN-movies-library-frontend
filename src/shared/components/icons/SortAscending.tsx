import { type SvgProps } from '@/shared/types';
export function SortAscending({
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
      <path d="M4 6h7m-7 6h7m-7 6h9m2-9 3-3 3 3m-3-3v12" />
    </svg>
  );
}
