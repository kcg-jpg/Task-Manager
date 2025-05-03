const Product = require('../models/productModel');  // Import the Product model

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, category, stockQuantity } = req.body;

  // Validate all required fields
  if (!name || !description || !price || !category || !stockQuantity) {
    return res.status(400).json({ message: 'All fields (name, description, price, category, stockQuantity) are required' });
  }

  try {
    // Create a new product using all fields from the request body
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stockQuantity
    });

    // Save the new product to the database
    await newProduct.save();

    // Respond with the newly created product
    res.status(201).json(newProduct);
  } catch (error) {
    // Catch and send any error message
    res.status(400).json({ message: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
