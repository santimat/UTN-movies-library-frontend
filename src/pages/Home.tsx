import { MovieCard } from '@/components/ui/MovieCard';
import type { MovieCardProps } from '@/types/entities/Movie';

const moviesMockup: MovieCardProps[] = [
  {
    id: 1,
    title: 'Spiderman No Way Home',
    genre: 'Action',
    year: 2021,
    posterUrl:
      'https://m.media-amazon.com/images/I/71gx5DiQa-L._AC_UF894,1000_QL80_.jpg',
    averageRating: 5,
  },
  {
    id: 2,
    title: 'The Batman',
    genre: 'Action',
    year: 2022,
    posterUrl: 'https://i.ebayimg.com/images/g/g3AAAOSwpIVhbMh8/s-l400.jpg',
    averageRating: 4.5,
  },
];

export function Home() {
  return (
    <>
      <title>Biblioteca de Películas</title>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-center gap-4 p-4 md:grid-cols-[repeat(auto-fit,minmax(250px,350px))] md:justify-normal">
        {moviesMockup.map((movie) => (
          <MovieCard key={`movie-card-${movie.id}`} {...movie} />
        ))}
      </div>
    </>
  );
}
