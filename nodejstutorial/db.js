const mongoose = require('mongoose');
// Define the nongoDB connection URL
const mongoURL ='mongodb://localhost:27017/hotelsA'
//Set up mongoDB connection
mongoose.connect(mongoURL);
const db = mongoose.connection;

// Define event listeners
db.on('connected',() =>{
    console.log('Connected to MongoDB server');
});
db.on('disconnected',() =>{
    console.log('MongoDB server disconnected');
});
db.on('error',(err) =>{
    console.log('MongoDB connection error: ',err);
});

//export datbase connection
module.exports = db;

