export type Review = {
  id: number;
  userId: number;
  username: string;
  movieTitle: string;
  rating: number;
  comment: string;
  movieId: number;
};
export type ReviewRequest = Pick<Review, 'movieId' | 'rating' | 'comment'>;
export type ReviewResponse = Review;
