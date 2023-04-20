import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import CakeIcon from '@mui/icons-material/Cake';
import { mobileContactIconSize } from '../utils/tools';



const MobileContactList = ({ email, phone, city, website, github, birthday }) => {
    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <EmailIcon style={mobileContactIconSize()} />
                </ListItemIcon>
                <ListItemText
                    primary={email}
                    primaryTypographyProps={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                />
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
                    <IconButton style={{ marginLeft: '-8px' }} onClick={() => openLink(website)}>
                        <LanguageIcon style={mobileContactIconSize()} />
                    </IconButton>
                </ListItemIcon>
                <ListItemText
                    primary={website}
                    primaryTypographyProps={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <IconButton style={{ marginLeft: '-8px' }} onClick={() => openLink(github)}>
                        <GitHubIcon style={mobileContactIconSize()} />
                    </IconButton>
                </ListItemIcon>
                <ListItemText
                    primary={github}
                    primaryTypographyProps={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }} />
            </ListItem>
        </List>
    );
};

export default MobileContactList;
