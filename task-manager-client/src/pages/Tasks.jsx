// src/pages/Tasks.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Container, TextInput, Title, Divider, Space } from '@mantine/core';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import debounce from 'lodash.debounce';

const Tasks = ({ tasks, onCreateTask }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // This runs only once when the component is mounted, initializing BlackboardIntegration
  useEffect(() => {
    if (window.BlackboardIntegration) {
      console.log('Initializing Blackboard Integration...');
      window.BlackboardIntegration.initialize();
    } else {
      console.error('BlackboardIntegration is not available.');
    }
  }, []); // Empty dependency array ensures it runs only once

  // Update filteredTasks when tasks change (e.g., when a new task is created)
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  // Debounced search function (memoized once)
  const debouncedSearch = useCallback(
    debounce((term) => {
      console.log('Running filter with term:', term, 'at', new Date().toISOString());
      const lower = term.toLowerCase();
      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(lower)
      );
      setFilteredTasks(filtered);
    }, 300),
    [tasks] // Recreate if tasks array changes
  );

  // Cancel debounce on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Log user input immediately
    console.log('User input:', value);

    // Only trigger the debounce if the value is not empty
    if (value.trim() !== '') {
      debouncedSearch(value);
    } else {
      console.log('Search cleared. Resetting filter.');
      setFilteredTasks(tasks); // Reset the filtered tasks when search is cleared
    }
  };

  return (
    <Container size="md">
      <Title order={2} align="left" mt="md" mb="sm">
        Task Form
      </Title>

      <TextInput
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
        mt="md"
        mb="md"
      />

      <TaskForm onSubmit={onCreateTask} />

      <Space h="xl" />
      <Divider my="lg" label="Your Tasks" labelPosition="center" />

      <TaskList tasks={filteredTasks} />
    </Container>
  );
};

export default Tasks;
