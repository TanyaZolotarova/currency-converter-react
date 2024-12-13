import React from 'react';
import { TitleTextComponent } from '../../Ui/TitleTextComponent';
import { Container } from '@mui/material';

export function AskQuestionComponent(): JSX.Element {
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
      <TitleTextComponent
        text={'Задати питання'}
        component={'h1'}
        sx={{ textAlign: 'center' }}
      />
    </Container>
  );
}
