const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    language: {
        language_type: {
            type: String,
            trim: true
        },
        write: {
            type: Number
        },
        speak: {
            type: Number
        }
    }
})

const Language = mongoose.model('Language', languageSchema);

module.exports = { Language };