import React from 'react';
import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function ButtonPagesComponent({ key, component, to, text, sx }) {
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
