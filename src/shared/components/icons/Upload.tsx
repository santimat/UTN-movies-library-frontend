import type { SvgProps } from '@/shared/types';

export function UploadIcon({
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
      <path
        fill="currentColor"
        d="M12 18.16V5.91l5.25 5.25l.75-.66L11.5 4L5 10.5l.75.66L11 5.91v12.25zM3 19h1v2h15v-2h1v3H3z"
      />
    </svg>
  );
}
