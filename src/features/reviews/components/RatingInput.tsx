import { StarIcon } from '@/shared/components/icons/Star';

const STARS = [1, 2, 3, 4, 5];

type RatingInputProps = {
  rating: number;
  onClick: (rating: number) => void;
};
export function RatingInput({
  rating,
  onClick: handleClick,
}: RatingInputProps) {
  return (
    <div>
      <label className="text-2xl">Rating</label>
      <ul className="flex justify-around border-2 border-neutral p-2">
        {STARS.map((star) => (
          <li
            className="transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer active:scale-95"
            key={`star-input-${star}`}
            onClick={() => handleClick(star)}
          >
            <StarIcon
              width={45}
              height={45}
              className={`pointer-events-none ${star <= rating ? 'fill-amber-400' : ''} `}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
