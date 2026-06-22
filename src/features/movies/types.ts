import { SORT_FIELDS } from '@/shared/utils/constants';
import { type Movie } from '@/shared/types';

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
