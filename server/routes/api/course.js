const express = require('express');
let router = express.Router();
const { Course } = require('../../models/course_model');

router.route('/')
    .post(async (req, res) => {
        try {
            const course = req.body.course;
            const newCourse = new Course({ course });

            await newCourse.save();

            res.status(200).send(`${course.course_name} saved.`);

        } catch (error) {
            console.log(error);
            res.json({ warning: 'Course save error', error });
        }
    })


module.exports = router;