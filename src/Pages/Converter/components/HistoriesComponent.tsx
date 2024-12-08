import { Box, Typography } from '@mui/material';
import { IHistoryItem } from '../../../Interfaces/IHistoryItem';
import React from 'react';
import { useStore } from '../../../store/store';
import { IStore } from '../../../Interfaces/IStore';

export function HistoriesComponent() {
  const history: IHistoryItem[] = useStore((state: IStore) => state.history);

  return (
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
          <Typography
            className={'font-roboto !font-basic'}
            sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span className={'text-[#C1C2CA]'}>{entry.date}</span>
            <span className={'text-[#707C87]'}>
              {entry.amount} {entry.fromCurrency}
            </span>
            <img
              src="/assets/img/arrow.png"
              alt="arrow"
              style={{ width: 10, height: 10 }}
            />
            <span className={'text-[#707C87]'}>
              {entry.result} {entry.toCurrency}
            </span>
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
