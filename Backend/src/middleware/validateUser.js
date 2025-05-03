const { body, validationResult } = require('express-validator');

// Middleware to validate registration input
const validateRegister = [
  body('first_name').notEmpty().withMessage('First name is required.'),
  body('last_name').notEmpty().withMessage('Last name is required.'),
  body('email').isEmail().withMessage('Invalid email.'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Simple controller for user registration (placeholder logic)
const createUser = (req, res) => {
  const { first_name, last_name, email, username } = req.body;

  // You can replace this with actual DB logic
  res.status(201).json({
    message: 'User registered successfully.',
    user: {
      first_name,
      last_name,
      email,
      username,
    },
  });
};

module.exports = {
  validateRegister,
  createUser,
};
