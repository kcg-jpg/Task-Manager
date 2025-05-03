const express = require('express');
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// GET all tasks (public or protected depending on your use case)
router.get('/', getAllTasks);

// GET task by ID (optional: protected)
router.get('/:id', authenticate, getTaskById);

// POST create a task (protected)
router.post('/', authenticate, createTask);

// PUT update a task by ID (protected)
router.put('/:id', authenticate, updateTask);

// DELETE a task by ID (protected)
router.delete('/:id', authenticate, deleteTask);

module.exports = router;
