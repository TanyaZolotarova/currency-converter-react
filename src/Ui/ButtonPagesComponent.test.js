import React from 'react';
import {render, screen} from "@testing-library/react";
import {ButtonPagesComponent} from "./ButtonPagesComponent";
import {BrowserRouter} from "react-router-dom";

test('renders ButtonPagesComponent element', () => {
    render(<BrowserRouter><ButtonPagesComponent text={'Контакти'}/></BrowserRouter>)

    expect(screen.getByRole('button', {name: /Контакти/i})).toBeInTheDocument();
})