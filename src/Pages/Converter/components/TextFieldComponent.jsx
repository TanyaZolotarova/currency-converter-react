import { TextField } from '@mui/material';
import React from 'react';

// eslint-disable-next-line react/prop-types
export function TextFieldComponent({ id, placeholder }) {
  return (
    <TextField
      id={id}
      variant="outlined"
      placeholder={placeholder}
      sx={{ flex: '1' }}
    />
  );
}
