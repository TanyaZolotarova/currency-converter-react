import { InputLabel } from '@mui/material';
import { IInputLabelComponent } from '../../../Interfaces/IInputLabelComponent';
import React from 'react';

export function InputLabelComponent({
  text,
  htmlFor,
}: IInputLabelComponent): JSX.Element {
  return (
    <InputLabel
      htmlFor={htmlFor}
      className={'text-left font-roboto !font-medium !text-xl'}
      sx={{ color: '#707C87' }}
    >
      {text}
    </InputLabel>
  );
}
