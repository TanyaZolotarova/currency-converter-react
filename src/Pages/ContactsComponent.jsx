import React from 'react';
import {TitleTextComponent} from "../Ui/TitleTextComponent";

export function ContactsComponent(){
    return(
        <TitleTextComponent text={'Контакти'} component={'h1'} sx={{textAlign: 'center'}}/>
    )
}