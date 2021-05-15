// api routing

// html routing
module.exports = (app) => {
    // get notes html page when /notes at end of url
    app.get ('/notes', (req,res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

    app.get ('*'), (req, res) => res.sendFile(path.join(__dirname, 'public/index.html'));
}