const mongoose = require('mongoose');

//Define Person Schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type:Number,
    },
    work: {
        type: String,
        enum: ['chef','manager','waiter']
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    Salary:{
        type: Number
    }
});

//Create Person Model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;