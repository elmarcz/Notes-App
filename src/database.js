const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('[DB] Database is connected'))
    .catch(err => console.log('[DB] Error ', err))