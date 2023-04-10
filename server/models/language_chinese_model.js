const mongoose = require('mongoose');

const languageChineseSchema = mongoose.Schema({
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

const LanguageChinese = mongoose.model('LanguageChinese', languageChineseSchema);

module.exports = { LanguageChinese };