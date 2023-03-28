const express = require('express');
let router = express.Router();

const { Language } = require('../../models/language_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const language = req.body.language;
           

            const newLanguage = new Language({
                language: language
            });

            await newLanguage.save();

            res.status(200).send('language updated.')

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Language updated error', error });
        }
    })

    module.exports = router;