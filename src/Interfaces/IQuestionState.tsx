export interface IQuestionState {
  searchQuery: string;
  expanded: string | false;
  setSearchQuery: (query: string) => void;
  setExpanded: (panel: string | false) => void;
}
