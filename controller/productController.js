const Product = require('../model/product')
const uploadedFileNames = [];  
const upload = require('../config/multer')
const multer = require('multer')

//create
module.exports.create = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        console.log("**** Multer error", err);
        return;
      } else if (err) {
        console.log("multer Error", err);
      } else if (req.file) {
        // The uploaded file is available as req.file
        const { name, quantity } = req.body;
        const image = req.file.filename;
        uploadedFileNames.push(req.file.filename)
        const product = await Product.create({
          name,
          quantity,
          image
        });

        if (!product) {
          return res.status(400).json({
            message: "Product not created"
          });
        }

        return res.redirect('/products');
      }
    });
  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      message: "Error in creating a project",
      error: error
    });
  }
};




//List of Products
module.exports.ListofProducts = async (req, res) => {
    try {
      const products = await Product.find({}); // Retrieve all products from the database
  
      // if (products.length === 0) {
      //   // Check if there are no products found
      //   return res.status(404).json({
      //     message: "No products added",
      //   });
      // }
  
      // return res.status(200).json({
      //   products,
      // });
      
  return res.render('home',{
    products:products,
    images:uploadedFileNames
  })
    } catch (error) {
      return res.status(500).json({
        message: "Error in getting all Products",
        error: error.message,
      });
    }
  };
  

// Delete product
module.exports.delete = async (req, res) => {
  try {
    const productId = req.params.id; // Get the value of the 'id' parameter from the request URL

    const product = await Product.findByIdAndDelete(productId); // Delete the product with the specified 'productId'

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // return res.status(200).json({
    //   message: "Product deleted successfully",
    //   data: product,
    // });

    return res.redirect('back')

  } catch (error) {
    return res.status(500).json({
      message: "Error in deleting Product",
      error: error.message,
    });
  }
};

// Update product
module.exports.update = async (req, res) => {
  try {
    const productId = req.params.id; // Get the value of the 'id' parameter from the request URL

    const { name, quantity, image } = req.body;

    const updatedProduct = {
      name,
      quantity,
      image,
    };

    const product = await Product.findByIdAndUpdate(
      productId,
      updatedProduct,
      { new: true } // Set {new: true} to return the updated document
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // return res.status(200).json({
    //   message: "Product updated successfully",
    //   data: product,
    // });
    return res.redirect('back')
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error in updating Product",
      error: error.message,
    });
  }
};
