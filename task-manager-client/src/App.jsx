// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import DragAndDrop from './components/DragAndDrop';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/assignment2' : '/';

  const handleCreateTask = (newTask) => {
    setTasks([...tasks, { ...newTask, _id: Date.now() }]);
  };

  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks tasks={tasks} onCreateTask={handleCreateTask} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="drag-and-drop" element={<DragAndDrop />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
