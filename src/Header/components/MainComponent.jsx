import React from 'react';
import { Box, Grid } from '@mui/material';
import { BtnComponent } from '../../Ui/BtnComponent';
import { TitleTextComponent } from '../../Ui/TitleTextComponent';

export function MainComponent() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(assets/img/Rectangle.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '20px 0',
      }}
    >
      <Grid container spacing={0} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 4,
          }}
        >
          <TitleTextComponent
            component="h1"
            className="font-roboto !font-bold"
            sx={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '40px',
            }}
            text={' Чіп Чендж'}
          />
          <TitleTextComponent
            component={'p'}
            className={'font-roboto !font-medium'}
            sx={{
              marginBottom: 2,
              color: '#fff',
              textAlign: 'center',
              fontSize: '20px',
            }}
            text={'Обмінник валют - навчальний'}
          />
          <BtnComponent
            className={
              'font-roboto !font-medium !bg-white !text-gray-500 !normal-case rounded !text-lg'
            }
            text={'Конвертер валют'}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="assets/img/mastercard.png"
            alt="Mastercard"
            sx={{ width: '80%', maxWidth: '300px' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
