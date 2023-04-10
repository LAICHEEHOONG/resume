const express = require('express');
let router = express.Router();
const { EmploymentChinese } = require('../../models/employment_chinese_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const employment = req.body.employment;
            const newEmployment = new EmploymentChinese({ employment });

            await newEmployment.save();

            res.status(200).send(`${employment.company} saved.`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Employment save error', error });
        }
    })


module.exports = router;