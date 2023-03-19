const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/codeia_development');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error connecting to DataBase"));

db.once('open', function(){
    console.log("Connected to :: MongoDB");
})

module.exports = db;