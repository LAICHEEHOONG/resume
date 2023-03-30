const express = require('express');
let router = express.Router();
const { Education } = require('../../models/education_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const education = req.body.education;
            const newEducation = new Education({ education });

            await newEducation.save();

            res.status(200).send(`${education.school} saved.`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Education save error', error });
        }
    })


module.exports = router;