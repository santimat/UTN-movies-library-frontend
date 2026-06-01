interface CheckBoxProps {
  props?: React.SVGProps<SVGSVGElement>;
  className?: string;
  empty?: boolean;
}
export function CheckBox({
  empty,
  className: classes,
  ...props
}: CheckBoxProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`pointer-events-none w-8 ${classes}`}
    >
      {empty ? (
        <path fill="currentColor" d="M3 21V3h18v18zm2-2h14V5H5z" />
      ) : (
        <path
          fill="currentColor"
          d="m10.6 16.2 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
        />
      )}
    </svg>
  );
}
