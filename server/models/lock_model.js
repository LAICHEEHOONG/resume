const mongoose = require('mongoose');

const lockSchema = mongoose.Schema({
    lock : Boolean
})

const Lock = mongoose.model('Lock', lockSchema);

module.exports = { Lock };