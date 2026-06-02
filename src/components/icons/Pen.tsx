interface PenIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function PenIcon({
  width = 32,
  height = 32,
  className: classes,
}: PenIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={classes}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#607d8b"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M14 6l7 7l-4 4" />
      <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
      <path d="M4 20l1.768 -1.768" />
    </svg>
  );
}
