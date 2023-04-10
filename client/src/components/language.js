import React from "react";
import { List, ListItem, ListItemText, LinearProgress, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { paddingZero } from "../utils/tools";



const Language = () => {
  const selectLanguage = useSelector(state => state.resume.language);
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
            selectEnglish ? 'Speaking Ability': '语言 - 口语能力'
          }
      </Typography>

      {selectLanguage.map((el, index) => (
        <div key={index}>

          <ListItem style={paddingZero()}>
            <ListItemText
              primary={el.language.language_type}
              primaryTypographyProps={{ fontSize: '0.8rem', color: '#ce6464' }}
            />
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
                value={el.language.speak} />
            </Box>
          </ListItem>
        </div>
      ))}

    </List>
  );
};

export default Language;