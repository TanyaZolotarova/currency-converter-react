import React from 'react';
import {Box} from "@mui/material";
import {TitleTextComponent} from "../../../Ui/TitleTextComponent";
import {BtnComponent} from "../../../Ui/BtnComponent";

export function HistoryConverterComponents(){
    return(
        <Box sx={{backgroundColor: "#fff" , width: '100%',
            minHeight: '30vh',py: 4,  mt: 'auto',}}>
            <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 4, backgroundColor: "#F6F7FF",display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
                <TitleTextComponent component={'h4'} text={'Історія конвертації'} className={'font-roboto !font-medium !text-2xl'}
                                    sx={{color: "#2a2a2a", textAlign: "left"}}/>
                <BtnComponent text={'Очистити історію'} className={'font-roboto !font-medium !text-base'}/>
            </Box>
        </Box>
    )
}