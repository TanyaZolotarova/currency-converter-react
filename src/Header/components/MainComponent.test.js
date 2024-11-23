import React from 'react';
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {MenuComponent} from "./MenuComponent";
import {MainComponent} from "./MainComponent";

describe('MainComponent', () => {
    test('renders MainComponent correctly with all elements', () => {
        render(<BrowserRouter><MainComponent/></BrowserRouter>);

        expect(screen.getByText('Чіп Чендж')).toBeInTheDocument();
        expect(screen.getByText('Обмінник валют - навчальний')).toBeInTheDocument();
        expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
        const img = screen.getByAltText('Mastercard');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'assets/img/mastercard.png');
    })
})