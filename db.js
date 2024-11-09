const mongoose = require('mongoose');
// defining connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'
// setting mongodb conection
mongoose.connect(mongoURL ,{
    useNewUrlParser: true,
    //useUnifiedTopology: true
})
// get the default connection
// mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB servers');
})

db.on('error', (err) => {
    console.log('MongoDB connection error: ',err);
})

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

// exporting the connection
module.exports = db;


