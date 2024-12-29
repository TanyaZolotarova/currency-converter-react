import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConverterComponent } from './ConverterComponent';

describe('ConverterComponent', () => {
  test('renders ConverterComponent correctly with TitleTextComponent', () => {
    render(<ConverterComponent />);

    expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
  });
});
