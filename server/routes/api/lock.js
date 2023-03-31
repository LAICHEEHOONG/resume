const express = require('express');
let router = express.Router();
const {Lock} = require('../../models/lock_model');

router.route('/')
    .get(async (req, res) => {
        try {
            const lockStatus = await Lock.find();
            res.status(200).json(lockStatus[0]);
        } catch(error) {
            console.log(error);
            res.json({ warning: 'check lock error', error });
        }
    })
    // .post(async (req, res) => {
    //     try {
    //         const lock = req.body.lock;
    //         const lockControl = new Lock({ lock });

    //         await lockControl.save();

    //         res.status(200).send(`lock posted`);

    //     } catch (error) {
    //         console.log(error);
    //         res.json({ warning: 'lock save error', error });
    //     }
    // })


module.exports = router;