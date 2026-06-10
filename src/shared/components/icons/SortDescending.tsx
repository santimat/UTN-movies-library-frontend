import { type SvgProps } from '@/shared/types';
export function SortDescending({
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
      <path d="M4 6h9m-9 6h7m-7 6h7m4-3 3 3 3-3m-3-9v12" />
    </svg>
  );
}
