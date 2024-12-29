import React from 'react';
import { render, screen } from '@testing-library/react';
import { CurrencyConverterComponent } from './CurrencyConverterComponent';

describe('CurrencyConverterComponent', () => {
  test('renders CurrencyConverterComponent correctly with all elements', () => {
    render(<CurrencyConverterComponent />);

    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
    expect(screen.getByText('Історія конвертації')).toBeInTheDocument();
  });
});
