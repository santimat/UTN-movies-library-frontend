import type { SvgProps } from '@/shared/types';

export function CameraOffIcon({
  width = 32,
  height = 32,
  className: classes,
}: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="2"
        d="M16 10.2v.801l.001.001zm0 0V5.001l-4.999.001m0 0h-1L10 5.001zm12 10.998V6L16.5 9.9M23 16v1l.001.001zm-7 0v3H1V5h4zm5 5L3 3"
      />
    </svg>
  );
}
