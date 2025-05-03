const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const userRoutes = require('./src/routes/userRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const authRoutes = require('./src/routes/auth'); // Auth routes: login/register
const authenticateJWT = require('./src/middleware/authMiddleware');

dotenv.config();
const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('❌ Database connection error:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(compression());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
}));

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      scriptSrc: ["'self'", 'https:', "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'http://localhost:5173', 'http://localhost:3000'],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Rate limiter for registration
const publicRegisterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  message: 'Too many registration attempts, please try again later.',
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend API');
});

// Public auth routes
app.use('/api', publicRegisterLimiter, authRoutes); // Handles /api/register and /api/login

// Protected user routes
app.use('/api/users', authenticateJWT, userRoutes); // Protects all /api/users routes

// Task routes (optionally protect POST/PUT/DELETE in taskRoutes.js)
app.use('/api/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
