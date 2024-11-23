import React from 'react';
import {render, screen} from "@testing-library/react";
import {AskQuestionComponent} from "./AskQuestionComponent";

test('renders AskQuestionComponent with correct text', () => {
    render(<AskQuestionComponent text={'Задати питання'}/>);

    const askQuestEl = screen.getByText('Задати питання')
    expect(askQuestEl).toBeInTheDocument();
})