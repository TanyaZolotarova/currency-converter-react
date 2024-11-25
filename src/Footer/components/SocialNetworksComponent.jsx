import React from 'react';
import { Box, IconButton } from '@mui/material';

export function SocialNetworksComponent() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <IconButton href="https://facebook.com" target="_blank">
        <img src="/assets/img/facebook.png" alt={'facebook'} />
      </IconButton>
      <IconButton href="https://instagram.com" target="_blank">
        <img src="/assets/img/instagram.png" alt={'instagram'} />
      </IconButton>
      <IconButton href="https://twitter.com" target="_blank">
        <img src="/assets/img/twitter.png" alt={'twitter'} />
      </IconButton>
      <IconButton href="https://youtube.com" target="_blank">
        <img src="/assets/img/youtube.png" alt={'youtube'} />
      </IconButton>
    </Box>
  );
}
