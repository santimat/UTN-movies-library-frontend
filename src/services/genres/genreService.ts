import type { SpringPageResponse } from '@/types/SpringPageResponse';
import { API_URL } from '@/lib/config';

const URL_BASE = `${API_URL}/genres`;
export const genreService = {
  getGenres: async () => {
    const res = await fetch(URL_BASE);
    const data: SpringPageResponse = await res.json();
    return { genres: data.content };
  },
};
