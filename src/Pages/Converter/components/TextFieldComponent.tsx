import { TextField } from '@mui/material';
import React from 'react';
import { ITextFieldComponent } from '../../../Interfaces/ITextFieldComponent';

export function TextFieldComponent({
  id,
  placeholder,
}: ITextFieldComponent): JSX.Element {
  return (
    <TextField
      id={id}
      variant="outlined"
      placeholder={placeholder}
      sx={{ flex: '1' }}
    />
  );
}
