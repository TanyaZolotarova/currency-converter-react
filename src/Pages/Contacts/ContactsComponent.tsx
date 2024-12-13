import React from 'react';
import { TitleTextComponent } from '../../Ui/TitleTextComponent';
import { Container, Grid, Typography } from '@mui/material';

export function ContactsComponent(): JSX.Element {
  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '30vh',
        py: 4,
        mt: 'auto',
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
            padding: 2,
          }}
        >
          <TitleTextComponent
            text={'Контакти'}
            component={'h2'}
            className={'font-roboto !font-bold '}
            sx={{
              textAlign: 'left',
              padding: 2,
              fontSize: '40px',
              color: '#2a2a2a',
            }}
          />
          <Typography
            variant="body2"
            className="font-roboto font-normal"
            sx={{ color: '#707C87', lineHeight: 1.5, textAlign: 'left' }}
          >
            04128, м.Київ, вул. Хрещатик, 19
            <br />
            Ліцензія НБУ №156
            <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
          </Typography>
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
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDqhW4AaKTsACP5-NHKMUWTJTot6uawfDw&q=04128,м.Київ,вул.Хрещатик,19"
            style={{
              border: 0,
              borderRadius: '10px',
              width: '100%',
              height: '300px',
            }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}
