import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import ImageDialog from './dialog';


const Course = () => {
    const selectCourse = useSelector(state => state.resume.course);
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);


    return (
        <List>
            <Typography
                variant="overline"
                sx={{ pl: 2 }}
                style={{
                    color: '#ce6464',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                }}>
                {
                    selectEnglish ? 'COURSES & TRAININGS' : '课程与培训'
                }

            </Typography>
            <hr className="project_line" />
            {
                selectCourse.map((el, index) => (
                    <ListItem key={`course${index}`} style={{ paddingTop: 0, paddingBottom: 0 }} >
                        <ListItemText style={{ margin: '2px' }}
                            primary={
                                <Typography variant="overline" style={{ fontSize: '0.85rem' }}>
                                    {el.course.course_name}
                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography variant="caption" color="textSecondary">
                                        {`${el.course.year} | Udemy Online Class`}
                                        <ImageDialog image={el.course.certificate} />
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

export default Course;


