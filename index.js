const express = require('express');
const app = express();
const cenflix = require('./routes/cenflix');

app.use('/', cenflix);

app.listen(3000, () => {
    console.log("Listen at port 3000\n");
})