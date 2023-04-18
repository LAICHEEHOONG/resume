import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Tooltip, IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const MobileEmployment = () => {
    const selectEmployment = useSelector(state => state.resume.employment);
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
                    selectEnglish ? 'Employment History' : '工作经历'
                }

            </Typography>
            <hr className="project_line" /> */}
            {
                selectEmployment.map((el, index) => (
                    <ListItem key={`eh-${index}`} style={{ paddingTop: 0, paddingBottom: 0 }} >
                        <ListItemText style={{ margin: '2px' }}
                            primary={
                                <Typography variant="overline" style={{ fontSize: '0.78rem' }}>
                                    {el.employment.company}
                                    <Tooltip title={el.employment.website} placement='top' arrow >
                                        <IconButton onClick={() => openLink(el.employment.website)} style={{ color: '#ce6464' }}>
                                            <LanguageIcon />
                                        </IconButton>
                                    </Tooltip>

                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography variant="caption" color="textSecondary" style={{ display: 'block' }}>
                                        {el.employment.position}
                                    </Typography>


                                    <Typography variant="caption" style={{ display: 'block' }}>
                                        {el.employment.location}
                                        <IconButton style={{ color: '#ce6464' }} disabled>
                                            <LocationOnIcon />
                                        </IconButton>


                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" style={{ display: 'block' }}>
                                        {el.employment.year}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))
            }
        </List>
    )
}

export default MobileEmployment;


