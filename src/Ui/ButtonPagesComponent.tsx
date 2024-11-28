import React from 'react';
import { Button } from '@mui/material';
import { IButtonPagesComponent } from '../Interfaces/IButtonPagesComponent';

export function ButtonPagesComponent({
  key,
  component,
  to,
  text,
  sx,
}: IButtonPagesComponent): JSX.Element {
  return (
    <Button
      className="font-roboto !font-normal !normal-case rounded"
      key={key}
      component={component}
      to={to}
      sx={sx}
    >
      {text}
    </Button>
  );
}
