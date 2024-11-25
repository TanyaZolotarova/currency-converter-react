import React from 'react';
import { render, screen } from '@testing-library/react';
import { SupportComponent } from './SupportComponent';

describe('SupportComponent', () => {
  test('renders SupportComponent correctly with all elements', () => {
    render(<SupportComponent />);

    const phoneLink = screen.getByRole('link', { name: /3773/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:3773');

    const phoneImage = screen.getByAltText('phone');
    expect(phoneImage).toBeInTheDocument();
    expect(phoneImage).toHaveAttribute('src', '/assets/img/phone.png');

    const supportText = screen.getByText('Цілодобова підтримка');
    expect(supportText).toBeInTheDocument();
  });
});
