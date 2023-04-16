import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Tooltip, IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import ImageDialog from './dialog';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const MobileEducation = () => {
    const selectEducation = useSelector(state => state.resume.education);
    // let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);
    const openLink = (url) => {
        window.open(url, '_blank');
    }


    return (
        <List>
            {/* <Typography
                variant="overline"
                sx={{ pl: 2 }}
                style={{
                    color: '#ce6464',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                }}>
                {
                    selectEnglish ? 'Education' : '教育背景'
                }

            </Typography>
            <hr className="project_line" /> */}
            {
                selectEducation.map((el, index) => (
                    <ListItem key={`edu-${index}`} style={{ paddingTop: 0, paddingBottom: 0 }} >
                        <ListItemText style={{ margin: '2px' }}
                            primary={
                                <Typography variant="overline" style={{ fontSize: '0.78rem' }}>
                                    {el.education.school}
                                    <Tooltip title={el.education.website} placement='top' arrow >
                                        <IconButton onClick={() => openLink(el.education.website)} style={{ color: '#ce6464' }}>
                                            <LanguageIcon />
                                        </IconButton>
                                    </Tooltip>

                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography variant="caption" color="textSecondary" style={{ display: 'block' }}>
                                        {el.education.department}
                                        {
                                            el.education.certificate.map((el, index) => {
                                                return (
                                                    <ImageDialog key={`imageDialog${index}`} image={el} />
                                                )
                                            })
                                        }
                                    </Typography>



                                    <Typography variant="caption" style={{ display: 'block' }}>
                                        {el.education.location}
                                        <IconButton style={{ color: '#ce6464' }} disabled>
                                            <LocationOnIcon />
                                        </IconButton>


                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" style={{ display: 'block' }}>
                                        {el.education.year}
                                    </Typography>

                                    {
                                        el.education.remark ?
                                            <Typography variant="caption" color="textSecondary" style={{ display: 'block' }}>
                                                ({el.education.remark})
                                            </Typography>
                                            : null
                                    }


                                </>
                            }
                        />
                    </ListItem>
                ))
            }

        </List>


    )
}

export default MobileEducation;


