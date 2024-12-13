import React from 'react';
import { render, screen } from '@testing-library/react';
import { ServicesComponent } from './ServicesComponent';

test('renders ServicesComponent with correct text', () => {
  render(<ServicesComponent text={'Послуги'} />);

  const servicesEl = screen.getByText(/Послуги/i);
  expect(servicesEl).toBeInTheDocument();
});
