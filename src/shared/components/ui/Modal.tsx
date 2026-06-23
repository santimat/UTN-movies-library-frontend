import { useModalStore } from '@/shared/store/useModalStore';
import { createPortal } from 'react-dom';

export function Modal() {
  const { showModal, closeModal, modalContent } = useModalStore();

  if (!showModal) return null;
  const handleClickModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-60 backdrop-blur-md"
      onClick={handleClickModal}
    >
      {modalContent}
    </div>,
    document.body.querySelector('#root') as HTMLElement
  );
}
