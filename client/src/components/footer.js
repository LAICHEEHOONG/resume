import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';


function Footer() {
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);


    return (
        <Grid container style={{ color: 'gray' }}>
            <Grid item xs={12}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    {
                                        selectEnglish ?
                                            <Typography variant="body2" align="center">
                                                © 2023 | Resume of LAI CHEE HOONG
                                            </Typography>
                                            :
                                            <Typography variant="body2" align="center">
                                                © 2023 | 赖志宏的简历
                                            </Typography>
                                    }

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
