import React from 'react';
import { Button } from '@mui/material';
import { IBtnComponent } from '../Interfaces/IBtnComponent';

export function BtnComponent({
  text,
  className,
  onClick,
}: IBtnComponent): JSX.Element {
  return (
    <Button
      variant="contained"
      className={className}
      onClick={onClick}
      sx={{
        padding: '10px 20px',
        marginTop: '15px',
      }}
    >
      {text}
    </Button>
  );
}
