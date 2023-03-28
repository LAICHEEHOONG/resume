const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    skill: {
        skill_type: {
            type: String,
            trim: true
        },
        strength: {
            type: Number
        },
        icon : {
            type: String,
            trim: true
        }
    }
})

const Skill = mongoose.model('Skill', skillSchema);

module.exports = { Skill };