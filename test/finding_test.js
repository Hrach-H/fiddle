const assert = require('assert');
const MusicRecord = require('../models/musicRecords');

describe('Finding records', function() {

    var record; //declared a variable outside the beforeEach block to have access to it everywhere in the testing scope

    beforeEach(function(done) {
        record = new MusicRecord({
            artist: 'Deep Purple',
            title: 'Machine Head'
        });

        record.save().then(function() {
            done();
        });
    });

    it('Finds one record from the db', function(done) {
        MusicRecord.findOne({artist: "Deep Purple"}).then(function(result) {
            assert(result.artist === "Deep Purple");
            done();
        });
    });

    it('Finds one record by ID from the db', function(done) {
        MusicRecord.findOne({_id: record._id}).then(function(result) {
            assert(result._id.toString() === record._id.toString());
            done();
        });
    });
});