import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';
import { paddingZero, contactIconSize, contactTextSize } from '../utils/tools';



const ContactList = ({ email, phone, city, website, github, birthday }) => {
    const openLink = (url) => {
        window.open(url, '_blank');
    }


    return (
        <List>
            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} disabled >
                        <EmailIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()} >
                <ListItemText
                    primary={email}
                    primaryTypographyProps={contactTextSize()}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} disabled >
                        <PhoneIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={phone}
                    primaryTypographyProps={contactTextSize()}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} disabled >
                        <LocationOnIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={city}
                    primaryTypographyProps={contactTextSize()} />
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} disabled >
                        <CakeIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText
                    primary={birthday}
                    primaryTypographyProps={contactTextSize()}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} onClick={() => openLink(website)}>
                        <LanguageIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={website}
                    primaryTypographyProps={{ fontSize: '0.7rem' }}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} onClick={() => openLink(github)}>
                        <GitHubIcon style={{ fontSize: '16px', color: '#ce6464' }} />
                    </IconButton>
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={github}
                    primaryTypographyProps={{ fontSize: '0.7rem' }}
                />
            </ListItem>
        </List>
    );
};

export default ContactList;
