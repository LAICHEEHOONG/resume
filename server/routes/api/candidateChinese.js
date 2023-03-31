const express = require('express');
let router = express.Router();

const { CandidateChinese } = require('../../models/candidate_chinese_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const candidate = req.body.candidate;


            const newCandidate = new CandidateChinese({
                candidate
            });

            await newCandidate.save();

            res.status(200).send('candidate updated.')

        } catch (error) {
            console.log(error);
            res.json({ warning: 'candidate updated error', error });
        }
    })

module.exports = router;