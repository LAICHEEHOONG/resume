const express = require('express');
let router = express.Router();

const { Candidate } = require('../../models/candidate_model');
const { Project } = require('../../models/project_model');
const { Course } = require('../../models/course_model');
const { Education } = require('../../models/education_model');
const { Employment } = require('../../models/employment_model');
const { Language } = require('../../models/language_model');
const { Skill } = require('../../models/skill_model');






router.route('/')
    .get(async (req, res) => {
        try {
            let englishData = {};
            const candidate = await Candidate.find(); //array
            const project = await Project.find();
            const course = await Course.find();
            const education = await Education.find();
            const employment = await Employment.find();
            const language = await Language.find();
            const skill = await Skill.find();
            
            englishData.candidate = candidate;
            englishData.project = project;
            englishData.course = course;
            englishData.education = education;
            englishData.employment = employment;
            englishData.language = language;
            englishData.skill = skill;
            
            res.status(200).json(englishData);

        } catch(error) {
            console.log(error);
            res.json({ warning: 'Get english data error', error });
        }
    })
   

module.exports = router;