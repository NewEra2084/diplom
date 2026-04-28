import { create } from "zustand";

type isOpen = { is: boolean; column: null };

type HeaderStore = {
  isOpen: isOpen;
  setIsOpen: (value: isOpen) => void;
};

export const HeaderStore = create<HeaderStore>((set) => ({
  isOpen: { is: false, column: null },
  setIsOpen: (value) => {
    set((prev) => ({ ...prev, isOpen: value }));
  },
}));
