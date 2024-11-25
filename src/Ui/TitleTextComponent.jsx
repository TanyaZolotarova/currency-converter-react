import React from 'react';
import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function TitleTextComponent({ text, component, sx, className }) {
  return (
    <Typography component={component} className={className} sx={sx}>
      {text}
    </Typography>
  );
}
