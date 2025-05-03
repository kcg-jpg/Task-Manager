const express = require('express');
const router = express.Router();

// Import the Order Controller functions correctly
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController'); // Ensure this path is correct

// Define routes and attach handler functions
router.get('/', getAllOrders);         // Get all orders
router.get('/:id', getOrderById);      // Get order by ID
router.post('/', createOrder);         // Create a new order
router.put('/:id', updateOrder);       // Update an order
router.delete('/:id', deleteOrder);    // Delete an order

module.exports = router;
