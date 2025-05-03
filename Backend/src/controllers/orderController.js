const Order = require('../models/orderModel');
const Product = require('../models/productModel');  // Import the Product model (to validate the productId)

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Ensure correct populate if needed
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  const { orderId, description, quantity, status } = req.body;

  if (!orderId || !description || !quantity) {
    return res.status(400).json({ message: 'orderId, description, and quantity are required' });
  }

  try {
    const newOrder = new Order({ orderId, description, quantity, status: status || 'Pending' });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
