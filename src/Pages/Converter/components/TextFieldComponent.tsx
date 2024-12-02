import { TextField } from '@mui/material';
import React from 'react';
import { ITextFieldComponent } from '../../../Interfaces/ITextFieldComponent';

export const TextFieldComponent = React.forwardRef(function TextFieldComponent(
  { id, placeholder, value, onChange, error, ...props }: ITextFieldComponent,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element {
  return (
    <TextField
      {...props}
      type="number"
      inputRef={ref}
      id={id}
      variant="outlined"
      placeholder={placeholder}
      sx={{ flex: '1' }}
      value={value}
      onChange={onChange}
      error={error}
      helperText={
        typeof props.helperText === 'string' ? props.helperText : undefined
      }
    />
  );
});
