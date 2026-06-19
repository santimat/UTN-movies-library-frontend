import { create } from 'zustand';
import { type ReactNode } from 'react';

type ModalStore = {
  showModal: boolean;
  modalContent: ReactNode | null;

  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  modalContent: null,
  openModal: (content: ReactNode) =>
    set({ showModal: true, modalContent: content }),
  closeModal: () => set({ showModal: false, modalContent: null }),
}));
