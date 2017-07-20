const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema & Model
const MusicRecordSchema = new Schema({
    artist: String,
    title: String,
    year: Number,
    genre: String
});

const MusicRecord = mongoose.model('musicrecord', MusicRecordSchema);

module.exports = MusicRecord;