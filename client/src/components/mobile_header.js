import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { switchLanguage } from '../store/actions/select_english_action';
import { destructureResume } from '../store/actions/resume_action';
import { Grid, Typography, Box, IconButton, Tooltip, Avatar, Card, CardContent, CardMedia, } from '@mui/material';
import Picture from '../image/laicheehoong2.jpg';
import TranslateIcon from '@mui/icons-material/Translate';
import { resumePreprocess } from '../utils/tools';

const MobileHeader = () => {

    const [translate, setTranslate] = useState('翻译为中文');

    const dispatch = useDispatch();
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);
    let resume = useSelector(state => state.resume)
    const englishResume = useSelector(state => state.english.english);
    const chineseResume = useSelector(state => state.chinese.chinese);

    useEffect(() => {
        if (selectEnglish) {
            dispatch(destructureResume(resumePreprocess(englishResume)));
            setTranslate('翻译为中文');
        } else {
            dispatch(destructureResume(resumePreprocess(chineseResume)));
            setTranslate('Translate into English');
        }
    }, [selectEnglish, chineseResume, englishResume, dispatch])

    const handleLanguage = (bool) => {
        dispatch(switchLanguage(bool));
    }


    return (

        <div className='image_profile' style={{marginBottom: '10px'}}>
            <Grid container justify="center" >
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center" bgcolor="#ce6464" p={1.5} className='header_mobile_box' >
                        <Box flexGrow={1}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Avatar variant="rounded" src={Picture} sx={{width: '70px', height: '70px'}} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="overline" color="white" style={{ fontWeight: 'bolder', fontSize: '1.1rem' }} >
                                        {resume.name}
                                        <Tooltip title={translate} placement='right' arrow >
                                            <IconButton
                                                style={{ left: 10 }}
                                                onClick={() => handleLanguage(selectEnglish)}>
                                                <TranslateIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Typography>

                                    <Typography variant="body1" color="white">{resume.job}</Typography>
                                    <hr className='position_line' />
                                </Grid>
                            </Grid>



                            <Typography variant='body2' color="white">{resume.profile}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default MobileHeader;
