import { useModal } from '@/shared/hooks/useModal';
import { createPortal } from 'react-dom';

export function Modal() {
  const { showModal, handleClickOutside, modalContent } = useModal();
  if (!showModal) return null;

  return createPortal(
    <div
      className="modal-portal fixed inset-0 z-60 backdrop-blur-md"
      onClick={handleClickOutside}
    >
      {modalContent}
    </div>,
    document.body.querySelector('#root') as HTMLElement
  );
}
