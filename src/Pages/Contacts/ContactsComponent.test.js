import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactsComponent } from './ContactsComponent';

test('renders ContactsComponent with correct text', () => {
  render(<ContactsComponent text={'Контакти'} />);

  const contactsEl = screen.getByText(/Контакти/i);
  expect(contactsEl).toBeInTheDocument();
});