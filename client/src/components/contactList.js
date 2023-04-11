import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';
import { paddingZero, contactIconSize, contactTextSize } from '../utils/tools';



const ContactList = ({ email, phone, city, website, github, birthday }) => {



    return (
        <List>
            <ListItem style={paddingZero()}>
                <ListItemIcon >
                    <EmailIcon style={contactIconSize()} />
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
                    <PhoneIcon style={contactIconSize()} />
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={phone}
                    primaryTypographyProps={contactTextSize()}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <LocationOnIcon style={contactIconSize()} />
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={city}
                    primaryTypographyProps={contactTextSize()} />
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <CakeIcon style={contactIconSize()} />
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
                    <LanguageIcon style={contactIconSize()} />
                </ListItemIcon>
            </ListItem>
            <ListItem style={paddingZero()}>
                <ListItemText primary={website}
                    primaryTypographyProps={{ fontSize: '0.7rem' }}
                />
            </ListItem>

            <ListItem style={paddingZero()}>
                <ListItemIcon>
                    <GitHubIcon style={contactIconSize()} />
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