import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import FourOFour from "./pages/fourOfour";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>    
                <Route path='/' element={<Home />} ></Route>
                <Route path='*' element={<FourOFour />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;