import { create } from "zustand";

const useTest = create((set) => ({
    test: "test",
    setTest: (test) => set({ test }),
}));

export default useTest;
