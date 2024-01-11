const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    name: String,
    ip: String,
    port: Number,
    username: String,
    password: String,
});

module.exports = mongoose.model('Server', serverSchema);
