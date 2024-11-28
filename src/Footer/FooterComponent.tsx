import React from 'react';
import { Box, Grid } from '@mui/material';
import { AdressComponent } from './components/AdressComponent';
import { PagesComponent } from './components/PagesComponent';
import { SupportComponent } from './components/SupportComponent';
import { PhoneCallsComponent } from './components/PhoneCallsComponent';
import { SocialNetworksComponent } from './components/SocialNetworksComponent';

export function FooterComponent(): JSX.Element {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#F6F7FF', width: '100%', py: 4, mt: 'auto' }}
    >
      <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Grid item xs={12} sm={6} md={2}>
          <AdressComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <PagesComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SupportComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <PhoneCallsComponent />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SocialNetworksComponent />
        </Grid>
      </Grid>
    </Box>
  );
}
