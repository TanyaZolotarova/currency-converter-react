import React from 'react';
import {render, screen} from "@testing-library/react";
import {HomeComponent} from "./HomeComponent";

describe('HomeComponent', () => {
    test('renders HomeComponent correctly with TitleTextComponent and BtnComponent', () => {
        render(<HomeComponent/>);

        expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
        expect(screen.getByText('Конвертувати валюту')).toBeInTheDocument();

        const description = screen.getByText('Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.');
        expect(description).toBeInTheDocument();
        expect(description.tagName).toBe('P');

        const image = screen.getByAltText('Mastercard');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'assets/img/converter_card.jpg');
    })
})