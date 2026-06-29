import type { SvgProps } from '@/shared/types';

export function LogoutIcon({
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
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
        <path d="M9 12h12l-3-3m0 6l3-3" />
      </g>
    </svg>
  );
}
