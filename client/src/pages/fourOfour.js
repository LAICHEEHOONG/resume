import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Grid } from '@mui/material';
import FourOFourImg from '../image/404.jpg'

const FourOFour = () => {
    const lockStatus = useSelector(state => state.lock.lock_status);

    let navigate = useNavigate();

    useEffect(() => {
        if (!lockStatus) {
            navigate('/')
        }
    }, [lockStatus, navigate]);


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '75vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h1">
                            404
                        </Typography>
                        <Typography variant="h6">
                            The page you’re looking for doesn’t exist.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            src={FourOFourImg}
                            alt="404 page"
                            width={500} height={250}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default FourOFour;