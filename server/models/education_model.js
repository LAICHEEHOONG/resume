const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    education: {
        school: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        location: {
            type: String,
            trim: true
        },
        website: {
            type: String,
            trim: true
        },
        certificate: [{
            type: String,
            trim: true
        }], 
        remark: {
            type: String,
            trim: true
        },
        year: {
            type: String,
            trim: true
        }
    }
})

const Education = mongoose.model('Education', educationSchema);
module.exports = { Education };


