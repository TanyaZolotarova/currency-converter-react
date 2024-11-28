import React from 'react';
import { TitleTextComponent } from '../Ui/TitleTextComponent';

export function NotFoundPageComponent(): JSX.Element {
  return (
    <TitleTextComponent
      text={'Not Found Page'}
      component={'h1'}
      sx={{ textAlign: 'center' }}
    />
  );
}
