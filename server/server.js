const express = require('express');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config();
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;


const language = require('./routes/api/language');
const candidate = require('./routes/api/candidate');
const candidateChinese = require('./routes/api/candidateChinese');
const skill = require('./routes/api/skill');
const url = require('./routes/api/project');
const course = require('./routes/api/course');
const education = require('./routes/api/education');
const educationChinese = require('./routes/api/educationChinese');
const employment = require('./routes/api/employment');

const english = require('./routes/api/english');

const lock = require('./routes/api/lock');

mongoose.connect(mongoUri);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api/language', language);
app.use('/api/candidate', candidate);
app.use('/api/candidateChinese', candidateChinese);
app.use('/api/skill', skill);
app.use('/api/url', url);
app.use('/api/course', course);
app.use('/api/education', education);
app.use('/api/educationChinese', educationChinese);
app.use('/api/employment', employment);
app.use('/api/english', english);
app.use('/api/lock', lock);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

