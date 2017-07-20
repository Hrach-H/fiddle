const assert = require('assert');
const mongoose = require('mongoose');
const Artist = require('../models/artist');

describe('Nesting records', function() {

    beforeEach(function(done) {
        mongoose.connection.collections.artists.drop(function() {
            done();
        });
    });

    it('Creates an artist', function(done) {
        var deepPurple = new Artist({
            artist: 'Deep Purple',
            genre: 'Hard Rock',
            records: [
                {
                    title: 'Machine Head',
                    year: 1972
                },
                {
                    title: 'Fireball',
                    year: 1971
                }
            ]
        });

        deepPurple.save().then(function() {
            Artist.findOne({artist: 'Deep Purple'}).then(function(result) {
                assert(result.records.length === 2);
                done();
            });
        });

    });

    it('Adds a records to an artist', function(done) {

        var deepPurple = new Artist({
            artist: 'Deep Purple',
            genre: 'Hard Rock',
            records: [
                {
                    title: 'Machine Head',
                    year: 1972
                },
                {
                    title: 'Fireball',
                    year: 1971
                }
            ]
        });

        deepPurple.save().then(function() {
            Artist.findOne({artist: 'Deep Purple'}).then(function(result) {
                //add a record to the records array
                result.records.push({
                    title: 'Infinite',
                    year: 2017
                });

                result.save().then(function() {
                    Artist.findOne({artist: 'Deep Purple'}).then(function(result) {
                        assert(result.records.length === 3);
                        done();
                    });
                });
            });
        });

    });

});