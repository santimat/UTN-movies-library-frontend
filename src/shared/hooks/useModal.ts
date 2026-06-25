import { useModalStore } from '@/shared/store/useModalStore';
import { useShallow } from 'zustand/shallow';

export function useModal() {
  const { showModal, closeModal, modalContent, openModal } = useModalStore(
    useShallow((s) => ({
      showModal: s.showModal,
      closeModal: s.closeModal,
      modalContent: s.modalContent,
      openModal: s.openModal,
    }))
  );

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return { showModal, handleClickOutside, modalContent, openModal, closeModal };
}
