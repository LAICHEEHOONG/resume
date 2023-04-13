import React from 'react';
import { useSelector } from "react-redux";
import ContactList from './contactList';
import Language from './language';
import Skill from './skill';
import Project from './project';
import Course from './course';
import Education from './education';
import Employment from './employment';
import { Grid } from '@mui/material';
import { formatDate } from '../utils/tools';


const Infomation = () => {
    
    const resume = useSelector(state => state.resume);

    return (

        <div className='image_profile'>
            <Grid container justify="center" >
                <Grid item xs={3}>
                    <ContactList
                        email={resume.email}
                        phone={resume.phone}
                        city={resume.city}
                        website={resume.website}
                        github={resume.github}
                        birthday={formatDate(resume.birthday)}
                    />
                    <Language />
                    <Skill />
                </Grid>
                <Grid item xs={9}>
                    <Project />
                    <Course />
                    <Education />
                    <Employment />
                </Grid>
            </Grid>
        </div>


    );
};

export default Infomation;
