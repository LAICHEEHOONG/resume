const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    course: {
        course_name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        certificate: {
            type: String,
            trim: true
        },
        year: {
            type: Number,
            min: 1990,
            max: 2090
        }
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = { Course };


