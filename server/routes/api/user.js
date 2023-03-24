const express = require('express');
let router = express.Router();

const { User } = require('../../models/user_model');

router.route('/add_name')
    .post(async (req, res) => {
        try {
            const familyName = req.body.family_name;
            const givenName = req.body.given_name;

            const user = new User({
                family_name: familyName,
                given_name: givenName
            });

            await user.save();

            res.status(200).send('Name updated.')

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Name updated error', error });
        }
    })

    module.exports = router;