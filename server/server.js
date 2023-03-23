const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})