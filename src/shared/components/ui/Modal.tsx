import { useModalStore } from '@/shared/store/useModalStore';
import { createPortal } from 'react-dom';

export function Modal() {
  const { showModal, closeModal, modalContent } = useModalStore();

  if (!showModal) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-content-center backdrop-blur-md"
      onClick={closeModal}
    >
      {modalContent}
    </div>,
    document.body.querySelector('#root') as HTMLElement
  );
}
