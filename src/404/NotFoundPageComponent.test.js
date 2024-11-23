import React from 'react';
import {render, screen} from "@testing-library/react";
import {NotFoundPageComponent} from "./NotFoundPageComponent";

test('renders NotFoundPageComponent with correct text', () => {
    render(<NotFoundPageComponent text={'Not Found Page'}/>);

    expect(screen.getByText('Not Found Page')).toBeInTheDocument();
})