import {Button} from "@mui/material";

export function BtnComponent({text, className}){
    return(
        <Button
            variant="contained"
            className={className}
            sx={{
                padding: '10px 20px',
                marginTop: '15px'
            }}
        >
            {text}
        </Button>
    )
}