const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // sets Mongoose promises to the native one

//Connect to the db before the tests run
before(function(done) {
    //Connect to MongoDB
    mongoose.connect('mongodb://localhost/testaroo', {
        useMongoClient: true
    });
    mongoose.connection.once('open', function() {
        console.log('Connection has been established');
        done();
    }).on('error', function(error) {
        console.log('Connection error: ', error);
    });
});

// Drop the records collection before each tests
beforeEach(function(done) {
    // Drop the collection
    mongoose.connection.collections.musicrecords.drop(function() {
        done();
    });
});

