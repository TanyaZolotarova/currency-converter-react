import React from 'react';
import {Box, Typography, Link} from "@mui/material";

export function SupportComponent(){
    return(
        <Box sx={ {display: 'flex',flexDirection: 'column',alignItems: 'left',mb: 1,}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <Link href="tel:3773" sx={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
                    <img src="/assets/img/phone.png" alt="phone" style={{marginRight: 8}}/>
                    <Typography className='font-roboto !font-medium' sx={{fontSize: '14px', color: '#1F1E25'}}>
                        3773
                    </Typography>
                </Link>
            </Box>
            <Typography variant="body2" className='font-roboto font-normal' sx={{color: '#707C87', textAlign: 'left', mt: 1,}}>
                Цілодобова підтримка
            </Typography>
        </Box>
    )
}