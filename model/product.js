const mongoose = require('mongoose'); // Importing the Mongoose library

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  image:{
    type:String
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', ProductSchema); // Creating a model named 'Product' using the defined schema

module.exports = Product; // Exporting the 'Product' model for use in other files
