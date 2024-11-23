import React from 'react';
import {render, screen} from "@testing-library/react";
import {MenuComponent} from "./MenuComponent";
import {BrowserRouter} from "react-router-dom";

describe('MenuComponent', () => {
    test('renders MenuComponent correctly with all elements', () => {
        render(<BrowserRouter><MenuComponent/></BrowserRouter>);

        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByAltText('account')).toBeInTheDocument();
        expect(screen.getByText('Особистий кабінет')).toBeInTheDocument();
    })
})