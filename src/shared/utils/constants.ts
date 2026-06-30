import type { PlatformUrl } from '../types';

export const API_URL = import.meta.env.VITE_API_URL;
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const DEBOUNCE_TIME = 400;

export const initialMovieForm = {
  id: 0,
  title: '',
  director: '',
  genre: 'placeholder',
  synopsis: '',
  releaseYear: '',
  averageRating: '',
  duration: '',
  posterFile: null,
  posterUrl: '',
  trailerUrl: '',
  watchUrl: '',
};

export const DEFAULT_MOVIE_FILTERS = {
  genre: '',
  sortBy: 'averageRating',
  sortOrder: 'DESC',
  searchText: '',
  page: '1',
};

export const DEFAULT_USER_FILTERS = {
  role: '',
  searchText: '',
  page: '1',
};

export const DEFAULT_SAVEDMOVIES_FILTERS = {
  searchText: '',
  genre: '',
  page: '1',
};
