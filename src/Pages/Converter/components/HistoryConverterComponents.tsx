import React from 'react';
import { Box } from '@mui/material';
import { TitleTextComponent } from '../../../Ui/TitleTextComponent';
import { BtnComponent } from '../../../Ui/BtnComponent';
import { useConverterStore } from '../../../store/converterStore';
import { IStore } from '../../../Interfaces/IStore';
import { HistoriesComponent } from './HistoriesComponent';

export function HistoryConverterComponents(): JSX.Element {
  const clearHistory: () => void = useConverterStore(
    (state: IStore) => state.clearHistory,
  );

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '30vh',
        py: 4,
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          mx: 'auto',
          mt: 4,
          p: 4,
          backgroundColor: '#F6F7FF',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TitleTextComponent
            component={'h4'}
            text={'Історія конвертації'}
            className={'font-roboto !font-medium !text-2xl'}
            sx={{ color: '#2a2a2a', textAlign: 'left' }}
          />
          <BtnComponent
            text="Очистити історію"
            className={'font-roboto !font-medium !text-base'}
            onClick={clearHistory}
          />
        </Box>
        <HistoriesComponent />
      </Box>
    </Box>
  );
}
