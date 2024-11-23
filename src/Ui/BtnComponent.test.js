import React from 'react';
import {render, screen} from "@testing-library/react";
import {BtnComponent} from "./BtnComponent";

test('renders BtnComponent element', () => {
    render(<BtnComponent text={'Converter'}/>)

    expect(screen.getByRole('button', {name: /Converter/i})).toBeInTheDocument();
})