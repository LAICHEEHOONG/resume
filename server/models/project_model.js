const mongoose = require('mongoose');
const { urlDefine } = require('../utils/tool');

const projectSchema = mongoose.Schema({
    urls: {
        project_name: {
            type: String,
            required: true,
            trim: true
        },
        github: urlDefine,
        youtube: urlDefine,
        deploy: urlDefine
    }
})


const Project = mongoose.model('Project', projectSchema);

module.exports = { Project };