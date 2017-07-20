const assert = require('assert');
const MusicRecord = require('../models/musicRecords');

describe('Deleting records', function() {
    var record;
    beforeEach(function(done) {
        record = new MusicRecord({
            artist: 'Deep Purple',
            title: 'Machine Head'
        });
        record.save().then(function() {
            done();
        });
    });

    it ('Deletes one record from the DB', function(done) {
        MusicRecord.findOneAndRemove({title: 'Machine Head'}).then(function() {
            MusicRecord.findOne({title: 'Machine Head'}).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });
});