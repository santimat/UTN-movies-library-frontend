import { type MouseEvent, useEffect, useState } from 'react';
import { StarIcon } from '@/components/icons/Star';

export function Test() {
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem('rating');
    return savedRating ? +savedRating : 0;
  });

  // init an array of 5 elements with values from 1 to 5
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement;
    const isListItem = target.tagName === 'LI';

    if (isListItem) {
      const clickedRating = Number(target.dataset.rating || '0');

      // is current rating is the same as clickedRating, the reset to 0
      if (rating === clickedRating) return setRating(0);

      setRating(clickedRating);
    }
  };

  useEffect(() => {
    // save in localStorage
    localStorage.setItem('rating', rating.toString());
  }, [rating]);

  return (
    <>
      <p className="text-center text-2xl font-bold">
        Esta plubicación tiene un rating de {rating} estrellas
      </p>
      <ul className="flex justify-center" onClick={handleClick}>
        {stars.map((star) => (
          <li
            className="transition-transform hover:scale-105 hover:cursor-pointer active:scale-95"
            key={`star-${star}`}
            data-rating={star}
            role="button"
          >
            <StarIcon
              className={`pointer-events-none w-20 ${star <= rating ? 'fill-amber-400' : null}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
