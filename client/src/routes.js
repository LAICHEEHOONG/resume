import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { checkLock } from "./store/actions/lock_action";
import { englishData } from "./store/actions/english_action";
import { chineseData } from "./store/actions/chinese_action";
import Loader from "./components/loader";
import Home from "./pages/home";
import FourOFour from "./pages/fourOfour";
import './styles/index.css';
import { insertHeaderIcon } from "./utils/tools";
import CodingTest from "./components/codingTest";
import InfoRegister from "./components/infoRegister";
import NameList from "./components/nameList";





const Router = () => {
    const toRegisterPage = useSelector(state => state.page.page_status)

    // const dispatch = useDispatch();
    //  useEffect(() => {
    //     dispatch(checkLock());
 
    // }, [dispatch]);

    // const lockStatus = useSelector(state => state.lock.lock_status);
    // const loading = useSelector(state => state.loader.loader);
    // let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);


    // useEffect(() => {
    //     dispatch(checkLock());
    //     insertHeaderIcon(selectEnglish);
    // }, [dispatch, selectEnglish]);

    // if (!lockStatus) {
    //     dispatch(englishData());
    //     dispatch(chineseData());
    // }



    return (
        <BrowserRouter>
            {/* {
                loading ? <Loader /> :
                    <Routes>
                        <Route path='/' element={<Home />} ></Route>
                        <Route path='*' element={<FourOFour />}></Route>
                    </Routes>
            } */}
            {/* <CodingTest /> */}
            {
                toRegisterPage ? <InfoRegister /> : <NameList />
            }
            {/* <InfoRegister />
            <NameList /> */}

        </BrowserRouter>
    )
}

export default Router;