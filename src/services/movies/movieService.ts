import { API_URL } from '@/lib/config';
const URL_BASE = `${API_URL}/movies`;

export const movieService = {
  getMovies: async (genre?: string) => {
    const url = new URL(URL_BASE);
    if (genre) url.searchParams.append('genre', genre);
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
