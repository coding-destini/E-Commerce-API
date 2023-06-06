const router = require('express').Router()

router.post('/',(req,res)=>{
    res.send("Hi welcome to home Ecommerce")
})

module.exports=router;