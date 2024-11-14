import { AppBar, Box, Button, Toolbar, Typography, IconButton } from "@mui/material";
import {Link, useLocation} from "react-router-dom";

export function MenuComponent() {
    const location = useLocation();

    const pages = [
        { name: 'Послуги', path: '/services' },
        { name: 'Конвертер валют', path: '/' },
        { name: 'Контакти', path: '/contacts' },
        { name: 'Задати питання', path: '/question' },
    ];

    return (
        <AppBar position="static" sx={{ bgcolor: '#F6F7FF', boxShadow: 'none' }} elevation={0}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 24px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/img/logo.png" alt="logo" style={{ width: 30, height: 30, marginRight: 8 }} />
                    <Typography variant="h6" sx={{ color: '#333', fontWeight: '500' }}>Чіп Чендж</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            component={Link}
                            to={page.path}
                            sx={{
                                color: location.pathname === page.path ? "#2C36F2" : "#707C87",
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                padding: '8px 16px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#707C87',
                                }
                            }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: '#333' }}>
                        <img src='/assets/img/Vector.svg' alt='account' style={{ width: 24, height: 24 }} />
                    </IconButton>
                    <Typography variant="button" sx={{ ml: 1, color: '#333', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        Особистий кабінет
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
