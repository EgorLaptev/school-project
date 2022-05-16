import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Ege from "./pages/Ege";
import Universities from "./pages/Universities";
import Schedule from "./pages/Schedule";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollIntoView from "./components/ScrollIntoView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <ScrollIntoView/>

        <Header/>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/home' element={ <Home/> }/>
                <Route path='/schedule' element={ <Schedule/> }/>
                <Route path='/ege' element={ <Ege/> }/>
                <Route path='/universities' element={ <Universities/> }/>
            </Routes>
        </BrowserRouter>

        <Footer/>

    </React.StrictMode>
);
