import React from "react";
import { List, ListItem, ListItemText, ButtonBase, Typography, Icon, Link, Grid, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { truncateString } from "../utils/tools";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';



const MobileProject = () => {
    const selectProject = useSelector(state => state.resume.project);
    // let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);

    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <List style={{ paddingTop: 0 }}>

            {selectProject.map((el, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText style={{ }}
                            primary={
                                <Typography variant="overline" style={{  }} >
                                    <Grid container >
                                        <Grid item xs={12}>
                                        {
                                        !el.urls.github ?
                                            <IconButton>
                                                <GitHubIcon disabled />
                                            </IconButton> :
                                            <Tooltip title={el.urls.github} placement='top' arrow >
                                                <IconButton onClick={() => openLink(el.urls.github)} style={{ color: '#ce6464' }}>
                                                    <GitHubIcon />
                                                </IconButton>
                                            </Tooltip>
                                    }
                                    {
                                        !el.urls.deploy ?
                                            <IconButton disabled>
                                                <LanguageIcon />
                                            </IconButton>
                                            :
                                            <Tooltip title={el.urls.deploy} placement='top' arrow >
                                                <IconButton onClick={() => openLink(el.urls.deploy)} style={{ color: '#ce6464' }}>
                                                    <LanguageIcon />
                                                </IconButton>
                                            </Tooltip>
                                    }

                                    {
                                        !el.urls.youtube ?
                                            <IconButton disabled>
                                                <YouTubeIcon />
                                            </IconButton>
                                            :
                                            <Tooltip title={el.urls.youtube} placement='top' arrow >
                                                <IconButton onClick={() => openLink(el.urls.youtube)} style={{ color: '#ce6464' }}>
                                                    <YouTubeIcon />
                                                </IconButton>
                                            </Tooltip>
                                    }

                                        </Grid>
                                        <Grid item xs={12}>
                                        {el.urls.project_name}
                                        </Grid>
                                    </Grid>

                           
                               
                                </Typography>
                            }
                        />
                    </ListItem>
                </div>
            ))}
        </List>
    );
};

export default MobileProject;