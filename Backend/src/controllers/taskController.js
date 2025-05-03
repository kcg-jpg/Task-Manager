const Task = require('../models/taskModel');
const asyncHandler = require('express-async-handler');
const { query, validationResult } = require('express-validator');

// Create a new task
exports.createTask = asyncHandler(async (req, res) => {
  const { title, description, dueDate, status } = req.body;

  const newTask = new Task({
    title,
    description,
    dueDate,
    status,
  });

  await newTask.save();
  res.status(201).json(newTask);
});

// Get all tasks with pagination and optional title filter
exports.getAllTasks = [
  query('title').optional().trim(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const title = req.query.title || '';

    const options = {
      page,
      limit,
      sort: { dueDate: 'asc' },
    };

    const result = await Task.paginate(
      { title: new RegExp(title, 'i') },
      options
    );

    const generatePaginationLinks = (currentPage, totalPages, limit) => {
      const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
      return {
        first: `${baseUrl}?page=1&limit=${limit}`,
        previous: currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}&limit=${limit}` : null,
        next: currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}&limit=${limit}` : null,
        last: `${baseUrl}?page=${totalPages}&limit=${limit}`,
      };
    };

    res.status(200)
      .links(generatePaginationLinks(page, result.totalPages, limit))
      .json(result.docs);
  }),
];

// Get a task by ID
exports.getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
});

// Update a task by ID
exports.updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
});

// Delete a task by ID
exports.deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json({ message: 'Task deleted successfully' });

  console.log('Request body:', req.body);  // Log incoming data

});


