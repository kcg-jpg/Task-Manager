const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Product CRUD Endpoints
router.get('/', productController.getAllProducts);         // GET all products
router.get('/:id', productController.getProductById);     // GET product by ID
router.post('/', productController.createProduct);        // POST create a new product
router.put('/:id', productController.updateProduct);      // PUT update a product
router.delete('/:id', productController.deleteProduct);   // DELETE a product

module.exports = router;
