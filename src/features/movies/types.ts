import { type Movie } from '@/shared/types';

export type MovieResponse = Movie;

export type Genre = {
  id: number;
  name: string;
};

export type GetMoviesProps = {
  genre?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  searchText?: string;
  page?: string;
  size?: string;
};
