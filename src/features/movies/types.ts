import { SORT_FIELDS } from '@/shared/utils/constants';
export type Movie = {
  id: number;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  releaseYear: number;
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

export type GetMoviesProps = {
  genre?: string;
  sortBy?: keyof typeof SORT_FIELDS;
  sortOrder?: 'ASC' | 'DESC';
  searchText?: string;
  page?: string;
  size?: string;
};
