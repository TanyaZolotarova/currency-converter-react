import { create } from 'zustand';
import { IHistoryItem } from '../Interfaces/IHistoryItem';
import { IStore } from '../Interfaces/IStore';

export const useStore = create<IStore>((set) => ({
  amount: '',
  result: '',
  fromCurrency: 'UAH',
  toCurrency: 'USD',
  date: new Date().toISOString().split('T')[0],
  history: JSON.parse(localStorage.getItem('conversionHistory') || '[]'),
  exchangeRates: {},

  setAmount: (amount) => set({ amount }),
  setResult: (result) => set({ result }),
  setFromCurrency: (currency) => set({ fromCurrency: currency }),
  setToCurrency: (currency) => set({ toCurrency: currency }),
  setDate: (date) => set({ date }),
  convert: (conversionRate) =>
    set((state) => ({
      result: (parseFloat(state.amount) * conversionRate).toFixed(2),
    })),
  addHistory: () =>
    set((state) => {
      const newItem: IHistoryItem = {
        date: state.date,
        amount: state.amount,
        fromCurrency: state.fromCurrency,
        toCurrency: state.toCurrency,
        result: state.result,
      };

      const updatedHistory = [newItem, ...state.history].slice(0, 10);
      console.log('Saving to localStorage:', updatedHistory);

      localStorage.setItem('conversionHistory', JSON.stringify(updatedHistory));

      return { history: updatedHistory };
    }),
  clearHistory: () =>
    set(() => {
      localStorage.removeItem('conversionHistory');
      return { history: [] };
    }),

  loadExchangeRates: async (date: string) => {
    console.log('loadExchangeRates called with date:', date);
    try {
      const formattedDate: string = new Date(date)
        .toLocaleDateString('uk-UA', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '.');

      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/exchange_rates?date=${formattedDate}`,
      );

      if (!response.ok)
        throw new Error(
          `Failed to fetch exchange rates: ${response.statusText}`,
        );

      const data = await response.json();
      console.log('Exchange rates data:', data);

      if (!data.exchangeRate) throw new Error('Exchange rate data is missing');

      const rates = data.exchangeRate.reduce(
        (rateMap, exchangeRate) => {
          const saleRate = exchangeRate.saleRate || exchangeRate.saleRateNB;
          if (saleRate) {
            rateMap[exchangeRate.currency] = saleRate;
          } else {
            console.warn(`No rate found for ${exchangeRate.currency}`);
          }
          return rateMap;
        },
        {} as Record<string, number>,
      );
      console.log('Rates:', rates);

      set({ exchangeRates: rates });
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  },
}));
