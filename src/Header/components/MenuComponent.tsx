import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPagesComponent } from '../../Ui/ButtonPagesComponent';
import { LogoComponent } from '../../Ui/LogoComponent';

export function MenuComponent(): JSX.Element {
  const location = useLocation();

  const pages: { name: string; path: string }[] = [
    { name: 'Послуги', path: '/services' },
    { name: 'Конвертер валют', path: '/converter' },
    { name: 'Контакти', path: '/contacts' },
    { name: 'Задати питання', path: '/question' },
  ];

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#F6F7FF', boxShadow: 'none' }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LogoComponent />
          <Box sx={{ display: 'flex', gap: 3 }}>
            {pages.map((page) => (
              <ButtonPagesComponent
                component={Link}
                key={page.name}
                to={page.path}
                text={page.name}
                sx={{
                  color:
                    location.pathname === page.path ? '#2C36F2' : '#707C87',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#707C87',
                  },
                }}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: '#333' }}>
              <img
                src="/assets/img/Vector.svg"
                alt="account"
                style={{ width: 24, height: 24 }}
              />
            </IconButton>
            <Typography
              variant="button"
              sx={{ ml: 1, fontSize: '16px', color: '#333' }}
              className="font-roboto !font-normal !normal-case rounded"
            >
              Особистий кабінет
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
