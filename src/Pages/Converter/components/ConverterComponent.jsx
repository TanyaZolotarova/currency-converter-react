import {TitleTextComponent} from "../../../Ui/TitleTextComponent";
import {Box} from "@mui/material";

export function ConverterComponent(){

    return(
        <Box sx={{backgroundColor: "#F6F7FF" , width: '100%',
            minHeight: '60vh',py: 4,  mt: 'auto',}}>
            <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 4, backgroundColor: "#fff" }}>
                <TitleTextComponent component={'h4'} text={'Конвертер валют'} sx={{color: "#2a2a2a", textAlign: "left", fontSize: '40px'}}
                className={'font-roboto !font-bold'}/>
            </Box>
        </Box>
    )
}