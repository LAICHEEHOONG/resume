import React from "react";
import { List, ListItem, ListItemText, ButtonBase, Typography, Icon, withStyles } from "@mui/material";
import { useSelector } from "react-redux";
import { truncateString } from "../utils/tools";
import LinkIcon from '@mui/icons-material/Link';


const Project = (props) => {
    const { classes } = props;
    const selectProject = useSelector(state => state.resume.project);
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);

    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <List>
            <Typography
                variant="h5"
                style={{
                    color: '#ce6464',
                    fontWeight: 'bold',
                }}>
                {
                    selectEnglish ? 'Personal Project' : '个人项目'
                }
                <hr className="project_line" />
            </Typography>

            {selectProject.map((el, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Typography variant="overline" style={{ fontSize: '1rem' }} >
                                    {el.urls.project_name}
                                </Typography>
                            }
                            secondary={
                                <>
                                    <ButtonBase onClick={() => openLink(el.urls.github)}>
                                        <Typography className="gray-text" variant="subtitile2" color="textSecondary" style={{ fontStyle: 'italic' }}>
                                            github: {el.urls.github}
                                        </Typography>
                                        <Icon style={{ marginLeft: '10px' }}>
                                            <LinkIcon />
                                        </Icon>
                                    </ButtonBase>
                                    {el.urls.youtube ?
                                        <ButtonBase onClick={() => openLink(el.urls.youtube)}>
                                            <Typography variant="subtitile2" color="textSecondary" style={{ fontStyle: 'italic' }}>
                                                Youtube: {el.urls.youtube}
                                            </Typography>
                                            <Icon style={{ marginLeft: '10px' }}>
                                                <LinkIcon />
                                            </Icon>
                                        </ButtonBase>
                                        : null
                                    }
                                    {el.urls.deploy ?
                                        <ButtonBase onClick={() => openLink(el.urls.deploy)} style={{ textAlign: 'left' }} >
                                            <Typography variant="subtitile2" color="textSecondary" style={{ fontStyle: 'italic' }}>
                                                Deploy: {truncateString(el.urls.deploy, 50)}
                                            </Typography>
                                            <Icon style={{ marginLeft: '10px' }}>
                                                <LinkIcon />
                                            </Icon>
                                        </ButtonBase>
                                        : null}
                                </>

                            }

                        />
                    </ListItem>

                </div>
            ))}

        </List>
    );
};

export default Project;