import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 grid place-content-center backdrop-blur-md"
      onClick={onClose}
    >
      {children}
    </div>,
    document.body.querySelector('#root') as HTMLElement
  );
}
