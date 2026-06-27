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
  releaseYear: number;
  averageRating: number;
  duration: number;
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
