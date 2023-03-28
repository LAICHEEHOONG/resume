const express = require('express');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config();
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;


const language = require('./routes/api/language');
const candidate = require('./routes/api/candidate');
const skill = require('./routes/api/skill');
const url = require('./routes/api/project')

mongoose.connect(mongoUri);

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/api/language', language);
app.use('/api/candidate', candidate);
app.use('/api/skill', skill);
app.use('/api/url', url);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

