const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Login a user
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log('🔐 Login attempt');
    console.log('Username submitted:', username);
    console.log('Password submitted:', password);

    const user = await User.findOne({ username });

    console.log('User from DB:', user);

    if (!user) {
      console.log('❌ User not found');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await user.comparePassword(password);

    console.log('Password match result:', isMatch);

    if (!isMatch) {
      console.log('❌ Password did not match');
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || 'supersecretkey',
      { expiresIn: '4h' }
    );

    console.log('✅ Login successful, token generated');

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name || '',
        first_name: user.first_name || '',
        last_name: user.last_name || ''
      }
    });
  } catch (error) {
    console.error('[Login Error]', error);
    res.status(500).json({ message: 'Login failed', error: 'Internal server error' });
  }
};

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, first_name, last_name, email, username, password } = req.body;

  try {
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already registered' });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      username,
      password // plain text — will be hashed in model pre-save hook
    });

    await newUser.save();

    const { password: _, ...userData } = newUser.toObject();

    res.status(201).json({
      message: 'User registered successfully',
      user: userData
    });
  } catch (error) {
    console.error('[Register Error]', error);
    res.status(500).json({ message: 'Failed to register user', error: 'Internal server error' });
  }
};
