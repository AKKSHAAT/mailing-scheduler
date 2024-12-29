import { create } from "zustand";

// Define the types for Template and List
interface Template {
  id: number;
  name: string;
  content: string;
}

interface List {
  id: number;
  name: string;
  users: Array<{
    id: number;
    email: string;
    firstName: string;
    category: string;
  }>;
}

// Define the state shape for the store
interface StoreState {
  selectedTemplate: Template | null;
  selectedList: List | null;
  setSelectedTemplate: (template: Template | null) => void;
  setSelectedList: (list: List | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedTemplate: null,
  selectedList: null,
  setSelectedTemplate: (template) =>
    set({ selectedTemplate: template }),
  setSelectedList: (list) =>
    set({ selectedList: list }),
}));
