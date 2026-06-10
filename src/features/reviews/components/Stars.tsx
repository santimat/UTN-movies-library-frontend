import { StarIcon } from '@/shared/components/icons/Star';

const STARS = [1, 2, 3, 4, 5];

export function Stars({ rating }: { rating: number }) {
  return (
    <ul className="flex justify-center">
      {STARS.map((star) => (
        <li key={`star-review-${star}`}>
          <StarIcon
            className={`pointer-events-none w-4 ${star <= rating ? 'fill-amber-400' : null}`}
          />
        </li>
      ))}
    </ul>
  );
}
