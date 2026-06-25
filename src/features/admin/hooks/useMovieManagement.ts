import { useShallow } from 'zustand/shallow';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';

export const useMovieManagement = () => {
  const { movieForm, setMovieForm } = useMovieManagementStore(
    useShallow((s) => ({
      movieForm: s.movieForm,
      setMovieForm: s.setMovieForm,
    }))
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setMovieForm({ [name]: value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    handleChange,
    handleSubmit,
    movieForm,
  };
};
