const assert = require('assert');
const MusicRecord = require('../models/musicRecords');

// Describe tests
describe('Saving records', function() {

    // Create tests
    it ('saves a record to the database', function(done) {
        var record = new MusicRecord({
            artist: 'Deep Purple',
            title: 'Machine Head'
        });

        record.save().then(function() {
            assert(!record.isNew);
            done();
        });

    });
});