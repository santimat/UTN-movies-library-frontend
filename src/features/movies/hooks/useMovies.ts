import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useMoviesStore } from '@/features/movies/store/useMoviesStore';
import { useMovieSearchParams } from '@/features/movies/hooks/useMovieSearchParams';

export function useMovies(limit = '5') {
  const { genre, sortBy, sortOrder, searchText, page } = useMovieSearchParams();
  const {
    movies,
    fetchMovies,
    loading,
    error,
    currentPage,
    totalPages,
    createMovie,
  } = useMoviesStore(
    useShallow((state) => ({
      movies: state.movies,
      fetchMovies: state.fetchMovies,
      loading: state.loading,
      error: state.error,
      totalPages: state.data.totalPages,
      currentPage: state.data.currentPage,
      createMovie: state.createMovie,
    }))
  );

  useEffect(() => {
    fetchMovies({
      genre,
      sortBy,
      sortOrder,
      searchText,
      page,
      size: limit,
    });
  }, [searchText, genre, sortBy, sortOrder, fetchMovies, page, limit]);

  return { movies, loading, error, totalPages, currentPage, createMovie };
}
