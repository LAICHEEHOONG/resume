const express = require('express');
let router = express.Router();

const { Candidate } = require('../../models/candidate_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const candidate = req.body.candidate;


            const newCandidate = new Candidate({
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