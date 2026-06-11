export type Review = {
  id: number;
  userId: number;
  username: string;
  movieTitle: string;
  rating: number;
  comment: string;
  movieId: number;
};
export type ReviewRequest = Omit<
  Review,
  'id' | 'username' | 'movieTitle' | 'userId'
>;
export type ReviewResponse = Review;
