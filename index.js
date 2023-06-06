const express = require('express')
const app = express()
const port = 7000;

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){console.log("Error in starting server on Port",port)}
    console.log("Server Started port 😊",port)
})
