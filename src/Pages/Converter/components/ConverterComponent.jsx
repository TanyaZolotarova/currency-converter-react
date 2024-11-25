import React from 'react';
import { TitleTextComponent } from '../../../Ui/TitleTextComponent';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { InputLabelComponent } from './InputLabelComponent';
import { TextFieldComponent } from './TextFieldComponent';

export function ConverterComponent() {
  const currencies = [
    {
      value: 'UAH',
    },
    {
      value: 'USD',
    },
    {
      value: 'EUR',
    },
    {
      value: 'GBR',
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: '#F6F7FF',
        width: '100%',
        minHeight: '60vh',
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
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <TitleTextComponent
          component={'h4'}
          text={'Конвертер валют'}
          sx={{
            color: '#2a2a2a',
            textAlign: 'left',
            fontSize: '40px',
            marginBottom: '20px',
          }}
          className={'font-roboto !font-bold'}
        />
        <form>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              rowGap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 40%',
                minWidth: '300px',
              }}
            >
              <InputLabelComponent text={'В мене є:'} htmlFor={'have'} />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <TextFieldComponent id={'have'} placeholder={'1000'} />
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="UAH"
                  sx={{ width: '100px' }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '0 1 auto',
                mt: 2,
              }}
            >
              <img
                src="/assets/img/icon-arrows.png"
                alt="icon"
                style={{ width: '22px', height: '22px', margin: '10px' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 40%',
                minWidth: '300px',
              }}
            >
              <InputLabelComponent text={'Хочу придбати:'} htmlFor={'want'} />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <TextFieldComponent id={'want'} placeholder={'38,5'} />
                <TextField
                  id="outlined-select-currency"
                  select
                  defaultValue="USD"
                  sx={{ width: '100px' }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Box>
          <Box
            mt={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <TextField
              id="date"
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]}
              sx={{
                marginTop: '8px',
                width: '100%',
                maxWidth: '32%',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={'font-roboto !font-medium !text-medium !text-lg'}
              sx={{
                marginTop: '16px',
                backgroundColor: '#2C36F2',
                color: '#fff',
              }}
            >
              Зберегти результат
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
