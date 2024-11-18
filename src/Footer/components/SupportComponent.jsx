import {Box, Typography, Link} from "@mui/material";

export function SupportComponent(){
    return(
        <Box sx={ {display: 'flex',flexDirection: 'column',alignItems: 'left',mb: 1,}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <Link href="tel:3773" sx={{display: 'flex', alignItems: 'left'}}>
                    <img src="/assets/img/phone.png" alt="phone"/>
                </Link>
                <Link href="tel:3773" sx={{textDecoration: 'none', fontWeight: 'bold', fontSize: '14px',
                    color: '#333', '&:hover': {color: '#2C36F2'},}}>
                    3773
                </Link>
            </Box>
            <Typography variant="body2" sx={{color: '#707C87', textAlign: 'left', mt: 1,}}>
                Цілодобова підтримка
            </Typography>
        </Box>
    )
}