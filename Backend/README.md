# My API Project

## Purpose
A REST API for managing users, products, and orders.

## API Endpoints
### User Endpoints:
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `POST /api/register` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Product Endpoints:
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Features
- CRUD operations for users, products, and orders.
- Authentication using JWT.

## Dependencies
- express: `npm install express`
- mongoose: `npm install mongoose`
- dotenv: `npm install dotenv`

## Architecture
- Controllers: Business logic for handling requests.
- Models: Database schema definitions using Mongoose.
- Routes: Mapped routes to controller functions.

## Reporting Issues
Please use the GitHub issues page to report any bugs or feature requests.
