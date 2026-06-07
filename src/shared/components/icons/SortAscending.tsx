import { type SvgProps } from '@/shared/types';
export function SortAscending({
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
      <path d="M4 6l7 0" />
      <path d="M4 12l7 0" />
      <path d="M4 18l9 0" />
      <path d="M15 9l3 -3l3 3" />
      <path d="M18 6l0 12" />
    </svg>
  );
}
