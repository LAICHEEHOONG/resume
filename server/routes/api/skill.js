const express = require('express');
let router = express.Router();

const { Skill } = require('../../models/skill_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const skill = req.body.skill;
           
            const newSkill = new Skill({
                skill
            });

            await newSkill.save();

            res.status(200).send(`${skill.skill_type} updated`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Skill updated error', error });
        }
    })
    .get(async(req, res) => {
        try {
            const skillData = await Skill.find({});
            console.log(skillData);

            res.json(skillData);

        } catch(error) {
            console.log(error);
            res.json({ warning: 'Show skill data error', error });
        }
    })

    module.exports = router;