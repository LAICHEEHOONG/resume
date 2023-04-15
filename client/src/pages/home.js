import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { getWindowDimensions } from "../utils/tools";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Mobile from "../components/mobile";
import Header from "../components/header";
import Infomation from "../components/infomation";
import Footer from "../components/footer";


const Home = () => {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const lockStatus = useSelector(state => state.lock.lock_status);

    let navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (lockStatus) {
            navigate('/404');
        }
    }, [lockStatus, navigate]);

    return (
        <Container maxWidth='md'>
            {
                windowDimensions < 820 ?
                    <>
                        <Mobile />
                    </>
                    :
                    <>
                        <Header />
                        <Infomation />
                        <Footer />
                    </>
            }
        </Container>
    )
}

export default Home;