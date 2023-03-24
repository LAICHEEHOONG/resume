const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    family_name: {
        type: String
    },
    given_name: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {User};