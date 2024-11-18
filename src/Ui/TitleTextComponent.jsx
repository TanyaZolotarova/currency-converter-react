import {Typography} from "@mui/material";

export function TitleTextComponent({text, component, sx}){
    return(
        <Typography component={component} sx={sx}>{text}</Typography>
    )
}