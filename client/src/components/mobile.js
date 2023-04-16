import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Box, IconButton, Tooltip, Avatar, Card, CardContent, CardMedia, } from '@mui/material';
import MobileHeader from './mobile_header';
import MobileContactList from './mobile_contactList';
import MoblieLanguage from './mobile_language';
import SimpleAccordion from './accordion';
import { formatDate } from '../utils/tools';

const Mobile = () => {

    const resume = useSelector(state => state.resume);

    return (
        <>
            <MobileHeader/>
            {/* <Grid container >
                <Grid item xs={12} sm={6} >
                    <MobileContactList
                        email={resume.email}
                        phone={resume.phone}
                        city={resume.city}
                        website={resume.website}
                        github={resume.github}
                        birthday={formatDate(resume.birthday)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MoblieLanguage />
                </Grid>
            </Grid> */}
            <SimpleAccordion />
       

        </>
    )
};

export default Mobile;