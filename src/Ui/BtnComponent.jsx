import React from 'react';
import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
export function BtnComponent({ text, className }) {
  return (
    <Button
      variant="contained"
      className={className}
      sx={{
        padding: '10px 20px',
        marginTop: '15px',
      }}
    >
      {text}
    </Button>
  );
}
