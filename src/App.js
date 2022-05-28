import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Ege from "./pages/Ege.js";
import Universities from "./pages/Universities.js";
import Schedule from "./pages/Schedule.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App(props) {

    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/home' element={ <Home/> }/>
                <Route path='/schedule' element={ <Schedule/> }/>
                <Route path='/ege' element={ <Ege/> }/>
                <Route path='/universities' element={ <Universities/> }/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}


export default App;