import React from 'react';
import { SxProps, Theme } from '@mui/system';

export interface ITitleTextComponent {
  component: React.ElementType;
  text: string;
  sx: SxProps<Theme>;
  className?: string;
}
