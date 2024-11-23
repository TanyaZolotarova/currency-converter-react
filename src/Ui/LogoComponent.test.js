import React from "react";
import {render, screen} from "@testing-library/react";
import {LogoComponent} from "./LogoComponent";
import {BrowserRouter} from "react-router-dom";

describe('LogoComponent', () => {
    test('renders LogoComponent elements', () => {
        render(<BrowserRouter><LogoComponent/></BrowserRouter>);

        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByText('Чіп Чендж')).toBeInTheDocument();
    })
})