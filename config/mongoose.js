const mongoose = require('mongoose');

mongoose.connect(process.env.Mongo_URL).then(()=>{
console.log("Connected mongoDB 😊")
}).catch((err)=>{
    console.log(err)
    console.log("Error in Connecting  mongoDB 😐")
})