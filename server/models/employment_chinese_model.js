const mongoose = require('mongoose');

const employmentChineseSchema = mongoose.Schema({
    employment: {
        company: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        position: {
            type: String,
            trim: true
        },
        year: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true,
        },
        website: {
            type: String,
            trim: true
        }

    }
});


const EmploymentChinese = mongoose.model('EmploymentChinese', employmentChineseSchema);
module.exports = { EmploymentChinese };


