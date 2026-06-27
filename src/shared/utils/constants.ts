export const API_URL = import.meta.env.VITE_API_URL;

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
  sortOrder: 'DESC' as 'ASC' | 'DESC',
  searchText: '',
  page: '1',
};
