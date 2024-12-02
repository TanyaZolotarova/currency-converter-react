import { IHistoryItem } from './IHistoryItem';

export interface IStore {
  amount: string;
  result: string;
  fromCurrency: string;
  toCurrency: string;
  date: string;
  history: IHistoryItem[];
  exchangeRates: Record<string, number>;
  setAmount: (amount: string) => void;
  setResult: (result: string) => void;
  setFromCurrency: (currency: string) => void;
  setToCurrency: (currency: string) => void;
  setDate: (date: string) => void;
  convert: (conversionRate: number) => void;
  addHistory: () => void;
  clearHistory: () => void;
  loadExchangeRates: (date: string) => void;
}
