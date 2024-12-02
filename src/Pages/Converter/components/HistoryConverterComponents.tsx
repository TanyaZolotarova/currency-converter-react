import React from 'react';
import { Box, Typography } from '@mui/material';
import { TitleTextComponent } from '../../../Ui/TitleTextComponent';
import { BtnComponent } from '../../../Ui/BtnComponent';
import { useStore } from '../../../store/store';
import { IHistoryItem } from '../../../Interfaces/IHistoryItem';
import { IStore } from '../../../Interfaces/IStore';

export function HistoryConverterComponents(): JSX.Element {
  const history: IHistoryItem[] = useStore((state: IStore) => state.history);
  const clearHistory: () => void = useStore(
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            mt: 3,
          }}
        >
          {history.map((entry: IHistoryItem, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #ddd',
              }}
            >
              <Typography className={'font-roboto !font-basic'}>
                <span className={'text-[#C1C2CA] mr-2'}>{entry.date} </span>
                <span className={'text-[#707C87] mr-2'}>
                  {entry.amount} {entry.fromCurrency}
                </span>
                <span> → </span>
                <span className={'text-[#707C87] ml-2'}>
                  {entry.result} {entry.toCurrency}
                </span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
