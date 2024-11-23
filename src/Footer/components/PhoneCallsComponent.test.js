import React from 'react';
import {render, screen} from "@testing-library/react";
import {PhoneCallsComponent} from "./PhoneCallsComponent";

describe('PhoneCallsComponent', () => {
    test('renders PhoneCallsComponent correctly with all elements', () => {
        render(<PhoneCallsComponent/>);

        const phoneLink = screen.getByRole('link', { name: /8 800 111 22 33/i });
        expect(phoneLink).toBeInTheDocument();
        expect(phoneLink).toHaveAttribute('href', 'tel:88001112233');

        const phoneImage = screen.getByAltText('phone');
        expect(phoneImage).toBeInTheDocument();
        expect(phoneImage).toHaveAttribute('src', '/assets/img/Vector.png');

        expect(screen.getByText('8 800 111 22 33')).toBeInTheDocument();
        expect(screen.getByText('Безкоштовно для дзвінків в межах України')).toBeInTheDocument();
    })
})