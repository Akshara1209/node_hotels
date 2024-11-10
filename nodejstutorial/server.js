const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //middleware used

app.get('/',function(req,res){
    res.send('Welcome to my Hotel! How can I help');
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

// CRUD operations
// create - post
// read - get
//update - put/patch
// Delete - Delete

app.listen(3000,()=>{
    console.log('listening on port 3000');
})