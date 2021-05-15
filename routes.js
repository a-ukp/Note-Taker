const fs = require ('fs');

module.exports = (app) => {
    // html routing
    // get notes html page when /notes at end of url
    app.get ('/notes', (req,res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

    app.get ('*'), (req, res) => res.sendFile(path.join(__dirname, 'public/index.html'));

    // api routing
    const noteFile = JSON.parse(fs.readFileSync('./db/db.json'));

    app.get('/api/notes', (req, res) => {
        return res.json(noteFile);
    });

};