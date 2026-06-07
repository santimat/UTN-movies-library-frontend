export type Movie = {
  id: number;
  title: string;
  director: string;
  genre: string;
  synopsis: string;
  year: number;
  posterUrl: string;
  averageRating: number;
};

export type MovieRequest = Omit<Movie, 'id'>;
export type MovieResponse = Movie;
export type MovieCardProps = Omit<Movie, 'director' | 'synopsis'>;

export type SpringPageResponse = {
  content: [];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
};

export type Genre = {
  id: number;
  name: string;
};

export type Review = {
  id: number;
  rating: number;
  comment: string;
  movieId: number;
  movieTitle: string;
  username: string;
};
export type ReviewRequest = Omit<Review, 'id' | 'username' | 'movieTitle'>;
export type ReviewResponse = Review;
