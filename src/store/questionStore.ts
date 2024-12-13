import { create } from 'zustand';
import { IQuestionState } from '../Interfaces/IQuestionState';

export const useQuestionStore = create<IQuestionState>((set) => ({
  searchQuery: '',
  expanded: false,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setExpanded: (panel) => set({ expanded: panel }),
}));
