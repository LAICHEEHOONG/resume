const mongoose = require('mongoose');

const employmentSchema = mongoose.Schema({
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


const Employment = mongoose.model('Employment', employmentSchema);
module.exports = { Employment };


