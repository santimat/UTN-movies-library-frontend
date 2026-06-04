export type Movie = {
  id: number;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  year: number;
  posterUrl: string;
};

export type MovieRequest = Omit<Movie, 'id'>;
export type MovieResponse = Movie;
