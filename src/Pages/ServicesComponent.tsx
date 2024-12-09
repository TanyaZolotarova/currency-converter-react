import React from 'react';
import { TitleTextComponent } from '../Ui/TitleTextComponent';

export function ServicesComponent(): JSX.Element {
  return (
    <TitleTextComponent
      text={'Послуги'}
      component={'h1'}
      sx={{ textAlign: 'center' }}
    />
  );
}
