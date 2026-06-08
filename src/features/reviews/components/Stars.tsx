import { StarIcon } from '@/shared/components/icons/Star';
export function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <ul className="flex justify-center">
      {stars.map((star) => (
        <li key={`star-review-${star}`}>
          <StarIcon
            className={`pointer-events-none w-4 ${star <= rating ? 'fill-amber-400' : null}`}
          />
        </li>
      ))}
    </ul>
  );
}
