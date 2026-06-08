export function RatingBadge({
  content,
  className: classes,
}: {
  content: string | number;
  className?: string;
}) {
  return (
    <span
      className={`absolute top-2 right-2 z-10 border-3 border-neutral bg-secondary px-2 py-1 font-semibold text-white ${classes}`}
    >
      {content}
    </span>
  );
}
