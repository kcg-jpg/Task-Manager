const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
const authenticateJWT = (req, res, next) => {
  // Extracting token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1] // Get token after 'Bearer'
    : null;

  // If no token is provided, deny access
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token with JWT_SECRET and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretkey');

    // Store the decoded information in req.user, using consistent field names
    req.user = { id: decoded.id, username: decoded.username };

    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    // Handle invalid or expired token errors
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authenticateJWT;
