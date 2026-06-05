import { useEffect, useState } from 'react';
import { MovieCard } from '@/components/ui/MovieCard';
import { getMovies } from '@/services/movies/movieService';
import type { Movie } from '@/types/entities/Movie';

// const moviesMockup: MovieCardProps[] = [
//   {
//     id: 1,
//     title: 'Spiderman No Way Home',
//     genre: 'Action',
//     year: 2021,
//     posterUrl:
//       'https://m.media-amazon.com/images/I/71gx5DiQa-L._AC_UF894,1000_QL80_.jpg',
//     averageRating: 5,
//   },
//   {
//     id: 2,
//     title: 'The Batman',
//     genre: 'Action',
//     year: 2022,
//     posterUrl: 'https://i.ebayimg.com/images/g/g3AAAOSwpIVhbMh8/s-l400.jpg',
//     averageRating: 4.5,
//   },
// ];

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { movies } = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,0.8fr))] justify-center gap-4 p-4 md:grid-cols-[repeat(auto-fit,minmax(250px,300px))] md:justify-normal">
      {movies.map((movie) => (
        <MovieCard key={`movie-card-${movie.id}`} {...movie} />
      ))}
    </div>
  );
}
