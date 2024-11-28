import React from 'react';
import { ConverterComponent } from './components/ConverterComponent';
import { HistoryConverterComponents } from './components/HistoryConverterComponents';

export function CurrencyConverterComponent(): JSX.Element {
  return (
    <>
      <ConverterComponent />
      <HistoryConverterComponents />
    </>
  );
}
