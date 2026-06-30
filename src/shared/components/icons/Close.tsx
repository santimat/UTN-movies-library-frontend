import type { SvgProps } from '@/shared/types';

export function CloseIcon({
  width = 24,
  height = 24,
  className: classes,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={classes}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="3"
        d="M16.95 7.05L12 12m0 0l-4.95 4.95M12 12l4.95 4.95M12 12L7.05 7.05"
      />
    </svg>
  );
}
