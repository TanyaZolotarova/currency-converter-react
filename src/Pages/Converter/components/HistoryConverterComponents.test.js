import React from 'react';
import { render, screen } from '@testing-library/react';
import { HistoryConverterComponents } from './HistoryConverterComponents';

describe('HistoryConverterComponents', () => {
  test('renders correctly with TitleTextComponent and BtnComponent', () => {
    render(<HistoryConverterComponents />);

    expect(screen.getByText('Історія конвертації')).toBeInTheDocument();
    expect(screen.getByText('Очистити історію')).toBeInTheDocument();
  });
});