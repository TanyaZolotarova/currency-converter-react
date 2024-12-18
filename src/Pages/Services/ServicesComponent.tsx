import React from 'react';
import { TitleTextComponent } from '../../Ui/TitleTextComponent';
import { Container, Grid, Typography, Box } from '@mui/material';
import { ServiceBoxComponent } from './components/ServiceBoxComponent';

export function ServicesComponent(): JSX.Element {
  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '100vh',
        py: 4,
        mt: 'auto',
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <TitleTextComponent
            text={'Наші послуги'}
            component={'h1'}
            className={'!font-roboto !font-bold !my-5'}
            sx={{ textAlign: 'center', fontSize: '40px', color: '#2a2a2a' }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#6a6a6a',
              maxWidth: '800px',
              mb: 4,
            }}
          >
            У нашому додатку ви знайдете зручні та надійні послуги для обміну
            валют та їх конвертації. Нижче представлені основні можливості, які
            ми пропонуємо
          </Typography>
        </Grid>
        <ServiceBoxComponent />
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Box
            component="img"
            src="assets/img/exchange.jpg"
            alt="exchange"
            sx={{
              width: '100%',
              maxWidth: '80%',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
