import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './Header/HeaderComponent';
import { ServicesComponent } from './Pages/ServicesComponent';
import { CurrencyConverterComponent } from './Pages/Converter/CurrencyConverterComponent';
import { ContactsComponent } from './Pages/ContactsComponent';
import { AskQuestionComponent } from './Pages/AskQuestionComponent';
import { NotFoundPageComponent } from './404/NotFoundPageComponent';
import { FooterComponent } from './Footer/FooterComponent';
import { HomeComponent } from './Pages/Home/HomeComponent';

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/converter" element={<CurrencyConverterComponent />} />
        <Route path="/contacts" element={<ContactsComponent />} />
        <Route path="/question" element={<AskQuestionComponent />} />
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
