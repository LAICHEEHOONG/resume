const express = require('express');
let router = express.Router();

// const { Candidate } = require('../../models/candidate_model');
const { Info } = require('../../models/info_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const candidate = req.body.candidate;
            const newCandidate = new Info({
                candidate
            });

            await newCandidate.save();

            res.status(200).send('candidate updated.')

        } catch (error) {
            console.log(error);
            res.json({ warning: 'candidate updated error', error });
        }
    })
    .get(async(req, res) => {
        try {
            const infoData = await Info.find({});
            console.log(infoData);

            res.json(infoData);

        } catch(error) {
            console.log(error);
            res.json({ warning: 'Show infoData data error', error });
        }
    })

// router.route('/')
//     .post(async (req, res) => {
//         try {
//             const candidate = req.body.candidate;
//             const newCandidate = new Candidate({
//                 candidate
//             });

//             await newCandidate.save();

//             res.status(200).send('candidate updated.')

//         } catch (error) {
//             console.log(error);
//             res.json({ warning: 'candidate updated error', error });
//         }
//     })
//     .put(async (req, res) => {
//         try {
//             const job = req.body.job;
//             const updateJob = await Candidate.findOneAndUpdate(
//                 { 'candidate.name': 'Lai Chee Hoong' },
//                 { $set: { "candidate.job": job } },
//                 { new: true }
//             );

//             res.json(updateJob);
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({ message: 'Update job error' });
//         }
//     })

module.exports = router;