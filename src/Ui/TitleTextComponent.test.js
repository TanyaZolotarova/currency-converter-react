import React from 'react';
import { TitleTextComponent } from './TitleTextComponent';
import { render, screen } from '@testing-library/react';

// eslint-disable-next-line no-undef
test('renders TitleTextComponent with correct text', () => {
  render(<TitleTextComponent text={'Чіп Чендж'} />);
  const headingEl = screen.getByText('Чіп Чендж');
  // eslint-disable-next-line no-undef
  expect(headingEl).toBeInTheDocument();
});
