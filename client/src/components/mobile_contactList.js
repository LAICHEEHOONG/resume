import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';
import { paddingZero, contactIconSize, mobileContactIconSize, contactTextSize } from '../utils/tools';



const MobileContactList = ({ email, phone, city, website, github, birthday }) => {



    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <EmailIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={email} />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <PhoneIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={phone} />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <LocationOnIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={city} />
            </ListItem>


            <ListItem>
                <ListItemIcon>
                    <CakeIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={birthday} />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <LanguageIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={website} />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <GitHubIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText primary={github} primaryTypographyProps={{
                    // whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'}} />
            </ListItem>
        </List>
    );
};

export default MobileContactList;
