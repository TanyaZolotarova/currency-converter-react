import React from 'react';
import { Typography } from '@mui/material';
import { ITitleTextComponent } from '../Interfaces/ITitleTextComponent';

export function TitleTextComponent({
  text,
  component,
  sx,
  className,
}: ITitleTextComponent): JSX.Element {
  return (
    <Typography component={component} className={className} sx={sx}>
      {text}
    </Typography>
  );
}
