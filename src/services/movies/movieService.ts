const API_URL = import.meta.env.VITE_API_URL;
import { type Movie } from '@/types/entities/Movie';

export interface MoviesResponse {
  content: Movie[];
  totalPages: number;
  totalElements: number;
  size: number;
}

export const getMovies = async () => {
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();
  return {
    movies: data.content,
    totalPages: data.totalPages,
    totalElements: data.totalElements,
    size: data.size,
  };
};
