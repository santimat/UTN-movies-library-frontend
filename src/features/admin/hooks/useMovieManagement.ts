import { useShallow } from 'zustand/shallow';
import { useMovieManagementStore } from '@/features/admin/store/useMovieManagementStore';
import { type FileInfo } from '@/shared/types';

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

  const handleDrop = (
    event: React.DragEvent<HTMLLabelElement>
  ): FileInfo | null => {
    event.preventDefault();

    const uploadedFile = event.dataTransfer.files[0] || null;
    setMovieForm({ posterFile: uploadedFile });
    event.currentTarget.classList.remove('border-tertiary');

    return uploadedFile?.name
      ? {
          name: uploadedFile.name,
          size: `${(uploadedFile.size / 1024).toFixed(2)} KB`,
        }
      : null;
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): FileInfo | null => {
    const uploadedFile = event.target.files?.[0] || null;
    setMovieForm({ posterFile: uploadedFile });

    return uploadedFile?.name
      ? {
          name: uploadedFile?.name,
          size: `${(uploadedFile.size / 1024).toFixed(2)} KB`,
        }
      : null;
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    handleChange,
    handleSubmit,
    movieForm,
    handleDrop,
    handleFileChange,
  };
};
