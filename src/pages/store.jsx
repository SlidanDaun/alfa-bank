import create from 'zustand';

const useStore = create((set) => ({
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

export default useStore;
