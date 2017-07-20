const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema & Model
const MusicRecordSchema = new Schema({
    title: String,
    year: Number
});

const ArtistSchema = new Schema({
    artist: String,
    genre: String,
    records: [MusicRecordSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;