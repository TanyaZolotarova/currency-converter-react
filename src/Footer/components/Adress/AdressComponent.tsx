import React from 'react';
import { Box, Typography } from '@mui/material';
import { LogoComponent } from '../../../Ui/LogoComponent';

export function AdressComponent(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <LogoComponent />
      <Typography
        variant="body2"
        className="font-roboto font-normal"
        sx={{ color: '#707C87', lineHeight: 1.5 }}
      >
        04128, м.Київ, вул. Хрещатик, 19
        <br />
        Ліцензія НБУ №156
        <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
      </Typography>
    </Box>
  );
}
