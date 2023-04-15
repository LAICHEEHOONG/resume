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
import { formatDate } from '../utils/tools';

export default function SimpleAccordion() {
    let selectEnglish = useSelector(state => state.selectEnglish.selectEnglish);
    const resume = useSelector(state => state.resume);

    return (
        <div>
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
                            fontSize: '1.2rem',
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
                            fontSize: '1.2rem',
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
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="overline"
                        sx={{ pl: 2 }}
                        style={{
                            color: '#ce6464',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
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
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
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
                </AccordionSummary>
                <AccordionDetails>
                    <MobileProject />
                </AccordionDetails>
            </Accordion>

        </div>
    );
}