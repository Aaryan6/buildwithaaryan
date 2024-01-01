import { create } from "zustand";

const useStore = create((set) => ({
  name: null,
  bio: null,
  setName: (value) => set((state) => ({ name: value })),
  setBio: (value) => set((state) => ({ bio: value })),
}));

export default useStore;
