import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export function LogoComponent() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}} component={Link} to="/" style={{textDecoration: 'none'}}>
            <img src="/assets/img/logo.png" alt="logo" style={{width: 30, height: 30, marginRight: 8}}/>
            <Typography variant="h6" sx={{color: '#333'}} className='font-roboto !font-bold'>
                Чіп Чендж
            </Typography>
        </Box>
    );
}
