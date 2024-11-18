import {Button} from "@mui/material";

export function BtnComponent({text}){
    return(
        <Button
            variant="contained"
            sx={{
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: 'bold',
                padding: '10px 20px',
                marginTop: '15px',
                '&:hover': { backgroundColor: '#f0f0f0' },
            }}
        >
            {text}
        </Button>
    )
}