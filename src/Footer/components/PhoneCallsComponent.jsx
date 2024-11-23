import React from 'react';
import {Box, Typography, Link} from "@mui/material";

export function PhoneCallsComponent(){
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 1,}}>
            <Box sx={{display: 'flex', alignItems: 'left', gap: 1}}>
                <Link href="tel:88001112233" sx={{display: 'flex', alignItems: 'center', textDecoration:'none'}}>
                    <img src="/assets/img/Vector.png" alt="phone" style={{marginRight: 8}}/>
                    <Typography className='font-roboto !font-medium' sx={{fontSize: '14px', color: '#1F1E25'}}>
                        8 800 111 22 33
                    </Typography>
                </Link>
            </Box>
            <Typography variant="body2" className='font-roboto font-normal' sx={{color: '#707C87', textAlign: 'left', mt: 1,}}>
                Безкоштовно для дзвінків в межах України
            </Typography>
        </Box>
    )
}