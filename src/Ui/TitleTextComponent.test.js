import React from "react";
import {TitleTextComponent} from './TitleTextComponent';
import {render, screen} from "@testing-library/react";

test('renders TitleTextComponent with correct text', () => {
    render(<TitleTextComponent text={'Чіп Чендж'}/>);
    const headingEl = screen.getByText('Чіп Чендж');
    expect(headingEl).toBeInTheDocument();
})