import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import { ICurrencyFieldComponent } from '../../../Interfaces/ICurrencyFieldComponent';

export function TextFieldCurrencyComponent({
  id,
  defaultValue,
  value,
  onChange,
}: ICurrencyFieldComponent): JSX.Element {
  const currencies: { value: string }[] = [
    { value: 'UAH' },
    { value: 'USD' },
    { value: 'EUR' },
    { value: 'GBP' },
    { value: 'CNY' },
  ];

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
