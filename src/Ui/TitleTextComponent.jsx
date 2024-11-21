import {Typography} from "@mui/material";

export function TitleTextComponent({text, component, sx, className}){
    return(
        <Typography component={component} className={className} sx={sx}>{text}</Typography>
    )
}