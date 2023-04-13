import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Infomation from "../components/infomation";
import Footer from "../components/footer";


const Home = () => {

    const lockStatus = useSelector(state => state.lock.lock_status);

    let navigate = useNavigate();

    useEffect(() => {
        if (lockStatus) {
            navigate('/404');
        }
    }, [lockStatus, navigate]);

    return (
        <Container maxWidth='md'>
            <Header />
            <Infomation />
            <Footer />
        </Container>
    )
}

export default Home;