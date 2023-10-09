const mongoose = require('mongoose');
const validator = require('validator');

const infoSchema = mongoose.Schema({
    candidate: {
        name: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        birthday: {
            type: String,
            trim: true
        },
        contact: {
            type: String,
            trim: true
        }
   
    }


})

const Info = mongoose.model('Info', infoSchema);

module.exports = { Info };