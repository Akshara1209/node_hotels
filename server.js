const express = require('express')
const app = express()

const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // store in req.body

const Person = require('./models/Person');
//this app could be named anything but convention;
//get will have two 
// '/' -> this we will enter after portnumber on localhost and phir yeh output dega whatever we will enter see
 app.get('/', function (req, res) {
 res.send('Hello World')
 })

 app.post('/person',async(req,res)=>{
  try{
    const data = req.body // assuming the request body contains the person data
    //create a new person document using the mongoose model
    const newPerson = new Person(data);
    const response = await newPerson.save(); // save the new person to the database
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
 })





app.listen(3000, () => {
  console.log('listening on port 3000');
})
