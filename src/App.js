import './App.css';
import {Route, Routes} from "react-router-dom";
import {HeaderComponent} from "./Header/HeaderComponent";
import {ServicesComponent} from "./Pages/ServicesComponent";
import {CurrencyConverterComponent} from "./Pages/CurrencyConverterComponent";
import {ContactsComponent} from "./Pages/ContactsComponent";
import {AskQuestionComponent} from "./Pages/AskQuestionComponent";
import {NotFoundPageComponent} from "./404/NotFoundPageComponent";
import {FooterComponent} from "./Footer/FooterComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<CurrencyConverterComponent/>}/>
                <Route path='/services' element={<ServicesComponent/>}/>
                <Route path='/contacts' element={<ContactsComponent/>}/>
                <Route path='/question' element={<AskQuestionComponent/>}/>
                <Route path='*' element={<NotFoundPageComponent/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default App;
