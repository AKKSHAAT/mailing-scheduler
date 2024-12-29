import { create } from "zustand";

export const useStore = create((set) => ({
  selectedTemplate: null,
  selectedList: null,
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
  setSelectedList: (list) => set({selectedList: list }),
}));
