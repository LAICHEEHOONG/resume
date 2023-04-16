import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText, Tooltip, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);
    const openLink = (url) => {
        window.open(url, '_blank');
    }


    return (
        <Grid container>
            <Grid item xs={12}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <Typography variant="body2" align="center" style={{ color: '#ce6464' }}>
                                        <Tooltip title={'https://github.com/LAICHEEHOONG/resume'} placement='top' arrow >
                                            <IconButton style={{ marginBottom: '5px' }} onClick={() => openLink('https://github.com/LAICHEEHOONG/resume')} >
                                                <GitHubIcon style={{ color: '#ce6464' }} />
                                            </IconButton>
                                        </Tooltip>
                                        {selectEnglish ? '2023 | Resume of LAI CHEE HOONG' : '2023 | 赖志宏的简历'}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Footer;
