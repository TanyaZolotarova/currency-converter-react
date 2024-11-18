import {Button} from "@mui/material";

export function ButtonPagesComponent({key, component, to, text, sx}){
    return(
        <Button
            key={key}
            component={component}
            to={to}
            sx={sx}
        >
            {text}
        </Button>
    )
}