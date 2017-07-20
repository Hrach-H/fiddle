const assert = require('assert');
const MusicRecord = require('../models/musicRecords');

describe('Updating records', function() {
    var record;
    beforeEach(function(done) {
        record = new MusicRecord({
            artist: 'Deep Purple',
            title: 'Machine Head',
            year: 1970
        });
        record.save().then(function() {
            done();
        });
    });

    it ('Updates one record in the DB', function(done) {
        MusicRecord.findOneAndUpdate({title: 'Machine Head'}, {title: 'Fireball'}).then(function() {
            MusicRecord.findOne({_id: record._id}).then(function(result) {
                assert(result.title === 'Fireball');
                done();
            });
        });
    });

    it('Increments year by one', function(done) {
        MusicRecord.update({}, { $inc: {year: 2} }).then(function() { //$inc is an 'update operator', which increments the value of a property
            MusicRecord.findOne({title: 'Machine Head'}).then(function(result) {
                assert(result.year === 1972);
                done();
            });
        });
    });

});