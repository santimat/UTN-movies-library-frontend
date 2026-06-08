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
