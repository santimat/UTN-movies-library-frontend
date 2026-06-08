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
