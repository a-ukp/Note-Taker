// declare dependencies
const express = require ('express');
const fs = require ('fs');
const path = require ('path');

// initialize express app
const app = express();

// middleware to access other files
app.use(express.static(path.join(__dirname, 'public')));


// communicate with route file for api and html
require('./routes')(app);

// check for available port first before running on 8000
const PORT = process.env.port || 8000;

// listen command
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`));
