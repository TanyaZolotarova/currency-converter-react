import {Box, Typography} from "@mui/material";

export function LogoComponent() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <img src="/assets/img/logo.png" alt="logo" style={{width: 30, height: 30, marginRight: 8}}/>
            <Typography variant="h6" sx={{color: '#333', fontWeight: '500'}}>Чіп Чендж</Typography>
        </Box>
    )
}