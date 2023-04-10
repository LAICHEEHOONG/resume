const mongoose = require('mongoose');
const validator = require('validator');

const candidateChineseSchema = mongoose.Schema({
    candidate: {
        name: {
            type: String,
            trim: true
        },
        profile: {
            type: String,
            trim: true
        },
        birthday: {
            type: Date
        },
        email: {
            type: String,
            trim: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalide email');
                }
            }
        },
        job: {
            type: String,
            trim: true
        }, 
        phone: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        website: {
            type: String,
            trim: true
        },
        github: {
            type: String,
            trim: true
        }
    }


})

const CandidateChinese = mongoose.model('CandidateChinese', candidateChineseSchema);

module.exports = { CandidateChinese };