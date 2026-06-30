export interface SvgProps {
  width?: number;
  height?: number;
  className?: string;
}

export type SpringPageResponse = {
  content: [];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
};

export type AppError = {
  code: string;
  error: string;
};

export type Movie = {
  id: number;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  releaseYear: number | string;
  averageRating: number | string;
  duration: number | string;
  posterUrl: string;
  trailerUrl: string;
  watchUrl: string;
};

export type MovieRequest = Movie & { posterFile: File | null };

export type FileInfo = {
  name: string;
  size: string;
  bufferUrl?: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  pfpUrl: string;
  pfpFile?: File | null;
};

export type PlatformUrl =
  | 'https://www.netflix.com'
  | 'https://www.hbomax.com'
  | 'https://play.hbomax.com'
  | 'https://www.disneyplus.com';
