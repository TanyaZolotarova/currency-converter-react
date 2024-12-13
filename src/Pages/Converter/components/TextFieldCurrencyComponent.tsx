import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { ICurrencyFieldComponent } from '../../../Interfaces/ICurrencyFieldComponent';
import { currencies } from '../../../data/currencies';

export function TextFieldCurrencyComponent({
  id,
  defaultValue,
  value,
  onChange,
}: ICurrencyFieldComponent): JSX.Element {
  return (
    <TextField
      id={id}
      select
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      sx={{ width: '100px' }}
    >
      {currencies.map((option: { value: string }) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
}
