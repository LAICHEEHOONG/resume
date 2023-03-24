const express = require('express');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config();
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;

const user = require('./routes/api/user');

mongoose.connect(mongoUri);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/user', user);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

