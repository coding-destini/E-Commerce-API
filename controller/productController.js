const Product = require('../model/product')

//create
module.exports.create = async(req,res)=>{
    try {
        const { name,quantity } = req.body;
       const product = await Product.create({
        name,
        quantity
       })

       if(!product){
        return res.status(400).json({
            message:"product not created"
        })
       }

       return res.status(200).json({
        message:"Product created successfully ",
        data:product
       })
         
    } catch (error) {
        console.log("Error in creating a product",error)
        return res.status(500).json({
            message:"Error in creating a project",
            error:error
        })
    }
}

//List of Products
module.exports.ListofProducts = async (req, res) => {
    try {
      const products = await Product.find({}); // Retrieve all products from the database
  
      if (products.length === 0) {
        // Check if there are no products found
        return res.status(404).json({
          message: "No products added",
        });
      }
  
      return res.status(200).json({
        products,
      });
  
    } catch (error) {
      return res.status(500).json({
        message: "Error in getting all Products",
        error: error.message,
      });
    }
  };
  

//Delete product
module.exports.delete = async (req, res) => {
    try {
      const productId = req.params.id; // Get the value of the 'id' parameter from the request URL
  
      const product = await Product.findByIdAndDelete(productId); // Delete the product with the specified 'productId'
  
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
  
      return res.status(200).json({
        message: "Product deleted successfully",
        data: product,
      });
  
    } catch (error) {
      return res.status(500).json({
        message: "Error in deleting Product",
        error: error.message,
      });
    }
  };
  

//update product quantity
module.exports.update = async (req, res) => {
    try {
      const productId = req.params.id; // Get the value of the 'id' parameter from the request URL
  
      const { number } = req.body;
  
      const product = await Product.findByIdAndUpdate(
        productId,
        { quantity: number },
        { new: true } // Set {new: true} to return the updated document
      );
  
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
  
      return res.status(200).json({
        message: "Product updated successfully",
        data: product,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error in updating Product",
        error: error.message,
      });
    }
  };
  
  