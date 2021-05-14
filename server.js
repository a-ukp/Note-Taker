// declare dependencies
const express = require ('express');
const fs = require ('fs');
const path = require ('path');

// initialize express app
const app = express();

//testing get
// app.get('/', (req,res) => {
//     res.send('hello jupiter');
// });

//testing app.get
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// check for available port first before running on 8000
const PORT = process.env.port || 8000;

app.listen(PORT, () => console.log(`Listening to server on ${PORT}`));
