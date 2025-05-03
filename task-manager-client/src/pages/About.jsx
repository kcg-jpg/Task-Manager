// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>About This App</h1>
      <p>This is a simple task management app built with the MERN stack (MongoDB, Express, React, Node.js).</p>
      <p>Key Features:</p>
      <ul>
        <li>User authentication (register, login, JWT-based)</li>
        <li>Create, update, and delete tasks</li>
        <li>Protected routes for logged-in users</li>
      </ul>
      <p>Developed by: [Karma Choden Gyabak]</p>
    </div>
  );
};

export default About;
