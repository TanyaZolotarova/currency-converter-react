import React from 'react';
import {TitleTextComponent} from "../../Ui/TitleTextComponent";
import {Box, Grid} from "@mui/material";
import {BtnComponent} from "../../Ui/BtnComponent";

export function HomeComponent() {
    return (
        <Grid container spacing={0} sx={{maxWidth: '1200px', margin: '0 auto', py: 6}}>
            <Grid item xs={12} md={6}
                  sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4}}>
                <TitleTextComponent text={'Конвертер валют'} component={'h1'} className={'font-roboto !font-bold'}
                                    sx={{textAlign: 'center', fontSize:'40px', color:'#1F1E25'}}/>
                <TitleTextComponent
                    text={'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.'}
                    component={'p'} className={'font-roboto !font-medium'} sx={{textAlign: 'center', fontSize:'20px', color:'#707C87'}}/>
                <BtnComponent className={'text-white font-roboto !font-medium bg-blue-800 !normal-case rounded !text-lg'} text={'Конвертувати валюту'}/>
            </Grid>
            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box
                    component="img"
                    src="assets/img/converter_card.jpg"
                    alt="Mastercard"
                    sx={{width: '80%', maxWidth: '300px'}}
                />
            </Grid>
        </Grid>
    )
}