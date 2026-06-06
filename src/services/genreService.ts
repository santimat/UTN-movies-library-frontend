import { API_URL } from '@/lib/constants';
import type { SpringPageResponse } from '@/types/SpringPageResponse';

const URL_BASE = `${API_URL}/genres`;
export const genreService = {
  getGenres: async () => {
    const res = await fetch(URL_BASE);
    const data: SpringPageResponse = await res.json();
    return { genres: data.content };
  },
};
