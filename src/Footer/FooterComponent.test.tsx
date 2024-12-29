import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FooterComponent } from './FooterComponent';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FooterComponent', () => {
  test('renders FooterComponent correctly with all elements', () => {
    render(
      <Router>
        <FooterComponent />
      </Router>,
    );

    expect(screen.getByText(/Чіп Чендж/i)).toBeInTheDocument();
    expect(screen.getByText(/Цілодобова підтримка/i)).toBeInTheDocument();
    expect(screen.getByText(/8 800 111 22 33/i)).toBeInTheDocument();
    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument();
  });
});
