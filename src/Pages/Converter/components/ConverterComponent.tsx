import { Box, Button, TextField } from '@mui/material';
import { TitleTextComponent } from '../../../Ui/TitleTextComponent';
import { InputLabelComponent } from './InputLabelComponent';
import { TextFieldComponent } from './TextFieldComponent';
import { useStore } from '../../../store/store';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextFieldCurrencyComponent } from './TextFieldCurrencyComponent';

export function ConverterComponent(): JSX.Element {
  const schema = z.object({
    amount: z.number().min(1, 'min 1 number').max(999999, 'max 6 numbers'),
    result: z.number().min(1, 'min 1 number').max(999999, 'max 6 numbers'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    amount,
    result,
    fromCurrency,
    toCurrency,
    date,
    exchangeRates,
    setAmount,
    setResult,
    setFromCurrency,
    setToCurrency,
    setDate,
    convert,
    loadExchangeRates,
  } = useStore();

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [debounceDelay] = useState(500);

  useEffect((): void => {
    loadExchangeRates(date);
    console.log(exchangeRates);
  }, [date, loadExchangeRates]);

  function handleInputChange(value: string, isAmount: boolean): void {
    const normalizedValue: string = value.replace(',', '.');
    if (/^\d*\.?\d*$/.test(normalizedValue)) {
      const setter = isAmount ? setAmount : setResult;
      setter(normalizedValue);

      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const newDebounceTimer = setTimeout(() => {
        const conversionRate: number =
          exchangeRates[fromCurrency] / exchangeRates[toCurrency];
        const calculatedValue = isAmount
          ? parseFloat(normalizedValue) * conversionRate || 0
          : parseFloat(normalizedValue) / conversionRate || 0;

        const targetSetter = isAmount ? setResult : setAmount;
        targetSetter(calculatedValue.toFixed(2));
      }, debounceDelay);

      setDebounceTimer(newDebounceTimer);
    }
  }

  function handleDateChange(date: string) {
    setDate(date);
    loadExchangeRates(date);
  }

  function onSubmit(): void {
    const conversionRate: number =
      exchangeRates[fromCurrency] / exchangeRates[toCurrency];
    convert(conversionRate);
    useStore.getState().addHistory();
  }

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
          sx={{ color: '#2a2a2a', textAlign: 'left', fontSize: '40px' }}
          className={'font-roboto !font-bold'}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <TextFieldComponent
                  {...register('amount', {
                    valueAsNumber: true,
                    setValueAs: (value) => parseFloat(value.replace(',', '.')),
                  })}
                  id={'have'}
                  placeholder={'1000'}
                  value={amount}
                  onChange={(e) => handleInputChange(e.target.value, true)}
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                />
                <TextFieldCurrencyComponent
                  id={'select-currency-have'}
                  defaultValue={'UAH'}
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                />
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
                <TextFieldComponent
                  {...register('result', {
                    valueAsNumber: true,
                    setValueAs: (value) => parseFloat(value.replace(',', '.')),
                  })}
                  id={'want'}
                  placeholder={'38,5'}
                  value={result}
                  onChange={(e) => handleInputChange(e.target.value, false)}
                  error={!!errors.result}
                  helperText={errors.result?.message}
                />
                <TextFieldCurrencyComponent
                  id={'select-currency-want'}
                  defaultValue={'USD'}
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                />
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
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              sx={{
                marginTop: '8px',
                width: '100%',
                maxWidth: '32%',
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
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
