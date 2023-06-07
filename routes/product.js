const router = require('express').Router();
const productContorller  = require('../controller/productController')

//creating Product
router.post('/product/create',productContorller.create)
//Getting all products
router.get('/products',productContorller.ListofProducts)
//deleting a product
router.delete('/products/:id',productContorller.delete)
//Updating a product
router.put('/products/:id/update_quantity',productContorller.update)


module.exports=router;