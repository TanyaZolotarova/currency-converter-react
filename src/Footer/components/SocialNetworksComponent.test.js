import React from 'react';
import {render, screen} from "@testing-library/react";
import {SocialNetworksComponent} from "./SocialNetworksComponent";

describe('SocialNetworksComponent', () => {
    test('renders SocialNetworksComponent correctly with all elements', () => {
        render(<SocialNetworksComponent/>);

        const facebookButton = screen.getByAltText('facebook');
        expect(facebookButton).toBeInTheDocument();
        expect(facebookButton.closest('a')).toHaveAttribute('href', 'https://facebook.com');

        const instagramButton = screen.getByAltText('instagram');
        expect(instagramButton).toBeInTheDocument();
        expect(instagramButton.closest('a')).toHaveAttribute('href', 'https://instagram.com');

        const twitterButton = screen.getByAltText('twitter');
        expect(twitterButton).toBeInTheDocument();
        expect(twitterButton.closest('a')).toHaveAttribute('href', 'https://twitter.com');

        const youtubeButton = screen.getByAltText('youtube');
        expect(youtubeButton).toBeInTheDocument();
        expect(youtubeButton.closest('a')).toHaveAttribute('href', 'https://youtube.com');

    })
})