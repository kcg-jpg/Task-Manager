// src/api/users.js

// Import apiRequest helper from api.js
import { apiRequest } from './api'; // Use the generalized request helper

// Function to get all users (no need to manually add token)
export const getUsers = async () => {
  return await apiRequest('/users');  // apiRequest will handle the token
};

// Function to get user by ID (uses apiRequest to handle token automatically)
export const getUserById = async (id) => {
  return await apiRequest(`/users/${id}`);
};

// Function to create a new user (POST request with apiRequest helper)
export const createUser = async (userData) => {
  return await apiRequest('/users', 'POST', userData);
};

// Function to delete a user (DELETE request with apiRequest helper)
export const deleteUser = async (id) => {
  return await apiRequest(`/users/${id}`, 'DELETE');
};
