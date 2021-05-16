const fs = require ('fs');
const uuid = require ('uuid');

module.exports = (app) => {
    // html routing
    // get notes html page when /notes at end of url
    app.get ('/notes', (req,res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

    app.get ('*'), (req, res) => res.sendFile(path.join(__dirname, 'public/index.html'));
    app.get ('/'), (req, res) => res.sendFile(path.join(__dirname, 'public/index.html'));

    // api routing
    // reads json file at /api/notes
    app.get('/api/notes', (req, res) => {
        return res.json(noteFile);
    });

    const noteFile = JSON.parse(fs.readFileSync('./db/db.json'));

    // add new note
    app.post('/api/notes', (req, res) => {
        const newnote = req.body;
        //  generates unique id for each note generated
        newnote.id = uuid.v4();
        noteFile.push(newnote);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteFile));
        res.json(noteFile);
    });

    // deleting note by unique id

};