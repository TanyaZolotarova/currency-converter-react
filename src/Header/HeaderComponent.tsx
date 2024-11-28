import React from 'react';
import { MenuComponent } from './components/MenuComponent';
import { MainComponent } from './components/MainComponent';

export function HeaderComponent(): JSX.Element {
  return (
    <div>
      <MenuComponent />
      <MainComponent />
    </div>
  );
}
