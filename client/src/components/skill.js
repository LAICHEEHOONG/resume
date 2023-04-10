import React from "react";
import { List, ListItem, ListItemText, ListItemIcon,LinearProgress, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { paddingZero, skillIcon } from "../utils/tools";




const Skill = () => {
  const selectSkill = useSelector(state => state.resume.skill);
  let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);


  return (
    <List>
      <Typography
        variant="h5"
        style={{
          color: '#ce6464',
          fontWeight: 'bold',
          textDecoration: "underline",
          textDecorationColor: "#ce6464",
          textUnderlineOffset: '0.5em',
          paddingBottom: '10px',
        }}>
          {
            selectEnglish ? 'Technical Skills': '技术能力'
          }
      </Typography>

      {selectSkill.map((el, index) => (
        <div key={index}>

          <ListItem style={paddingZero()}>
    
            <ListItemText
              primary={el.skill.skill_type}
              primaryTypographyProps={{ fontSize: '0.8rem', color: '#ce6464' }}
            />
                    <ListItemIcon>
                <img src={skillIcon[el.skill.icon]} alt='Icon' style={{ width: '20px', height: '20px' }} />
            </ListItemIcon>
          </ListItem>
          <ListItem style={{ paddingLeft: 0 }} >
            <Box sx={{
              width: '100%', 
              "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "#ce6464"
              },
              "& .MuiLinearProgress-colorPrimary": {
                backgroundColor: "pink"
              }
            }}>
              <LinearProgress
                variant="determinate"
                value={el.skill.strength} />
            </Box>
          </ListItem>
        </div>
      ))}

    </List>
  );
};

export default Skill;