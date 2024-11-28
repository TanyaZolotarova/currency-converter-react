import React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

export interface IButtonPagesComponent {
  key: string;
  component: React.ElementType;
  to: string;
  text: string;
  sx: SxProps<Theme>;
}
