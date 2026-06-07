import type { SvgProps } from '@/shared/types';

export function ArrowDownIcon({
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}
