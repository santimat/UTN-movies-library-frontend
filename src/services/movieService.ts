import { API_URL } from '@/lib/constants';
import { type Movie } from '@/types/entities/Movie';
const URL_BASE = `${API_URL}/movies`;

export const movieService = {
  getMovies: async (
    genre?: string,
    sortBy?: keyof Movie | undefined,
    sortOrder?: 'ASC' | 'DESC',
    searchText?: string
  ) => {
    const url = new URL(URL_BASE);
    if (genre) url.searchParams.append('genre', genre);
    if (sortBy) url.searchParams.append('sortBy', sortBy);
    if (sortOrder) url.searchParams.append('sortOrder', sortOrder);
    if (searchText) url.searchParams.append('searchText', searchText);
    const res = await fetch(url);
    const data = await res.json();

    if (data.empty)
      return {
        movies: [],
      };
    return {
      movies: data.content,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      size: data.size,
    };
  },
};
