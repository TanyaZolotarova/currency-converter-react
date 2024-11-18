import {Box, Typography, Link} from "@mui/material";

export function PhoneCallsComponent(){
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'left', mb: 1,}}>
            <Box sx={{display: 'flex', alignItems: 'left', gap: 1}}>
                <Link href="tel:88001112233" sx={{display: 'flex', alignItems: 'left'}}>
                    <img src="/assets/img/Vector.png" alt="phone"/>
                </Link>
                <Link href="tel:88001112233" sx={{textDecoration: 'none', fontWeight: 'bold',
                    fontSize: '14px', color: '#333', '&:hover': {color: '#2C36F2'},}}>
                    8 800 111 22 33
                </Link>
            </Box>
            <Typography variant="body2" sx={{color: '#707C87', textAlign: 'left', mt: 1,}}>
                Безкоштовно для дзвінків в межах України
            </Typography>
        </Box>
    )
}