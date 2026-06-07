import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const handlerChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    // each the window is resized, check if match with the query
    media.addEventListener('change', handlerChange);

    return () => {
      // clear the event listener
      media.removeEventListener('change', handlerChange);
    };
  });

  return matches;
}
