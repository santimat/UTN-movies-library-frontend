export type Movie = {
  id: number;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  year: number;
  averageRating: number;
  duration: number;
  posterUrl: string;
  trailerUrl: string;
};

export type MovieRequest = Omit<Movie, 'id'>;
export type MovieResponse = Movie;
export type MovieCardProps = Omit<Movie, 'director' | 'synopsis'>;

export type Genre = {
  id: number;
  name: string;
};
