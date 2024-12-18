import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { IServices } from '../../../Interfaces/IServices';

export function ServiceBoxComponent() {
  const services: IServices[] = [
    {
      title: 'Обмін валют',
      description:
        'Швидкий і безпечний обмін популярних валют, таких як USD, EUR, GBR, і CNY.',
    },
    {
      title: 'Конвертація валют',
      description:
        'Зручний інструмент для розрахунку поточного курсу та конвертації валют у реальному часі.',
    },
    {
      title: 'Історія операцій',
      description:
        'Переглядайте історію ваших обмінних операцій і зберігайте важливі дані.',
    },
  ];
  return (
    <>
      {services.map((service, index) => (
        <Grid
          key={index}
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: 3,
              textAlign: 'center',
              height: '100%',
              width: '100%',
              maxWidth: '350px',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: '20px',
                color: '#2a2a2a',
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#6a6a6a', fontSize: '16px' }}
            >
              {service.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
}
