import {Box} from "@mui/material";
import {ButtonPagesComponent} from "../../Ui/ButtonPagesComponent";
import {Link} from "react-router-dom";

export function PagesComponent(){

    const pages = [
        {name: 'Послуги', path: '/services'},
        {name: 'Конвертер валют', path: '/converter'},
        {name: 'Контакти', path: '/contacts'},
        {name: 'Задати питання', path: '/question'},
    ];

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            {pages.map((page) => (
                <ButtonPagesComponent
                    key={page.name}
                    to={page.path}
                    component={Link}
                    sx={{
                        margin: '0 auto',
                        padding: '0',
                        textDecoration: 'none',
                        color: '#707C87',
                    }}
                    text={page.name}
                />
            ))}
        </Box>
    )
}