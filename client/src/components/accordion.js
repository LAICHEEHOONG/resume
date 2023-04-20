import * as React from 'react';
import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileSkill from './mobile_skill';
import MobileContactList from './mobile_contactList';
import MoblieLanguage from './mobile_language';
import MobileProject from './mobile_project';
import MobileCourse from './mobile_course';
import MobileEducation from './mobile_education';
import MobileEmployment from './mobile_employment';
import Footer from './footer';
import { formatDate } from '../utils/tools';

export default function SimpleAccordion() {
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);
    const resume = useSelector(state => state.resume);

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Contact Information' : '联系信息'
                        }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileContactList
                        email={resume.email}
                        phone={resume.phone}
                        city={resume.city}
                        website={resume.website}
                        github={resume.github}
                        birthday={formatDate(resume.birthday)}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Speaking Ability' : '语言 - 口语能力'
                        }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MoblieLanguage />


                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Technical Skills' : '技术能力'
                        }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileSkill />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Personal Project' : '个人项目'
                        }

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileProject />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'COURSES & TRAININGS' : '课程与培训'
                        }

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileCourse />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Education' : '教育背景'
                        }

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileEducation />
                </AccordionDetails>
            </Accordion>

            <Accordion style={{ borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                        {
                            selectEnglish ? 'Employment History' : '工作经历'
                        }

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MobileEmployment />
                </AccordionDetails>
            </Accordion>


            <Footer />
        </div>
    );
}
