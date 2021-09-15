const express = require('express');
const cors = require('cors');
const studentsRoute = require('./routes/students');

const app = express();
app.use(cors());

app.use('/students', studentsRoute);

module.exports = app;