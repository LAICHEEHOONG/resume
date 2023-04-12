const express = require('express');
let router = express.Router();
const {EducationChinese} = require('../../models/education_chinese_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const education = req.body.education;
            const newEducation = new EducationChinese({ education });

            await newEducation.save();

            res.status(200).send(`${education.school} saved.`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Education save error', error });
        }
    })
    .put(async (req, res) => {
        try {
            const department = req.body.department;
            const updateDepartment = await EducationChinese.findOneAndUpdate(
                { 'education.school': '霹雳育才独立中学' },
                { $set: { "education.department": department } },
                { new: true }
            );

            res.json(updateDepartment);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Update department error' });
        }
    })


module.exports = router;