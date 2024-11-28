import React from 'react';
import { TitleTextComponent } from '../Ui/TitleTextComponent';

export function AskQuestionComponent(): JSX.Element {
  return (
    <TitleTextComponent
      text={'Задати питання'}
      component={'h1'}
      sx={{ textAlign: 'center' }}
    />
  );
}
