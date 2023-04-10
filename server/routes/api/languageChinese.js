const express = require('express');
let router = express.Router();

const { LanguageChinese } = require('../../models/language_chinese_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const language = req.body.language;
           
            const newLanguage = new LanguageChinese({
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