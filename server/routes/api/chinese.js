const express = require('express');
let router = express.Router();

const { CandidateChinese } = require('../../models/candidate_chinese_model');
const { Project } = require('../../models/project_model');
const { Course } = require('../../models/course_model');
const { EducationChinese } = require('../../models/education_chinese_model');
const { EmploymentChinese } = require('../../models/employment_chinese_model');
const { LanguageChinese } = require('../../models/language_chinese_model');
const { Skill } = require('../../models/skill_model');






router.route('/')
    .get(async (req, res) => {
        try {
            let englishData = {};
            const candidate = await CandidateChinese.find(); //array
            const project = await Project.find();
            const course = await Course.find();
            const education = await EducationChinese.find();
            const employment = await EmploymentChinese.find();
            const language = await LanguageChinese.find();
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