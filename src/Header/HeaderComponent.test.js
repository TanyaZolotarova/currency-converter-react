import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderComponent} from "./HeaderComponent";
import {BrowserRouter} from "react-router-dom";

describe('HeaderComponent', () => {
    test('renders HeaderComponent correctly with all elements', () => {
        render(<BrowserRouter><HeaderComponent /></BrowserRouter>);

        expect(screen.getByText(/Особистий кабінет/i)).toBeInTheDocument();
        const imgBg = screen.getByAltText('Mastercard');
        expect(imgBg).toBeInTheDocument();
        expect(imgBg).toHaveAttribute('src', 'assets/img/mastercard.png');
    });
});