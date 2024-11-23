import React from 'react';
import {render, screen} from "@testing-library/react";
import {AdressComponent} from "./AdressComponent";
import {BrowserRouter} from "react-router-dom";

describe('AdressComponent', () => {
    test('renders AdressComponent correctly with all elements', () => {
        render(<BrowserRouter><AdressComponent/></BrowserRouter>);

        expect(screen.getByText(/04128, м\.Київ, вул\. Хрещатик, 19/i)).toBeInTheDocument();
        expect(screen.getByText(/Ліцензія НБУ №156/i)).toBeInTheDocument();
        expect(screen.getByText(/Ⓒ ПАТ ЧіпЧендж, 2019-2023/i)).toBeInTheDocument();
    })
})