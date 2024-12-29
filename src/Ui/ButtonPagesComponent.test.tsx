import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonPagesComponent } from './ButtonPagesComponent';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

test('renders ButtonPagesComponent element', () => {
  render(
    <BrowserRouter>
      <ButtonPagesComponent
        key={'Контакти'}
        component={Link}
        to={'/contacts'}
        text={'Контакти'}
        sx={{ fontSize: '16px' }}
      />
    </BrowserRouter>,
  );

  expect(screen.getByRole('button', { name: /Контакти/i })).toBeInTheDocument();
});
