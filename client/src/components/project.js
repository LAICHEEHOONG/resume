import React from "react";
import { List, ListItem, ListItemText, Typography, Link, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Project = () => {
    const selectProject = useSelector(state => state.resume.project);
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);

    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <List style={{ paddingTop: 0 }}>
            <Typography
                variant="overline"
                sx={{ pl: 2 }}
                style={{
                    color: '#ce6464',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                }}>
                {
                    selectEnglish ? 'Personal Project' : '个人项目'
                }

            </Typography>

            <hr className="project_line" />
            {selectProject.map((el, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText style={{ height: '20px' }}
                            primary={
                                <Typography variant="overline" style={{ fontSize: '1rem' }} >

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
                                                <Link href={el.urls.youtube} target="_blank">
                                                    <IconButton style={{ color: '#ce6464' }}>
                                                        <YouTubeIcon />
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>
                                    }
                                    {el.urls.project_name}
                                </Typography>
                            }
                        />
                    </ListItem>
                </div>
            ))}
        </List>
    );
};

export default Project;