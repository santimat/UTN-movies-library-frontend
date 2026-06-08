export function Chip({
  className: classes,
  onClick,
  text,
}: {
  className?: string;
  onClick?: () => void;
  text?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-neutral px-2 py-1 whitespace-nowrap uppercase transition-transform ${classes}`}
    >
      {text}
    </button>
  );
}
