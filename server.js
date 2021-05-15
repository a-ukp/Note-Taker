// declare dependencies
const express = require ('express');
// const fs = require ('fs');
const path = require ('path');

// initialize express app
const app = express();

// middleware to connect to html files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./'));

// body parser for put & post requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// communicate with route file for api and html
require('./routes')(app);

// check for available port first before running on 8000
const PORT = process.env.port || 8000;

// listen command
app.listen(PORT, () => console.log(`Listening to server on http://localhost:${PORT}`));
