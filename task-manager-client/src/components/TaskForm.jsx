// src/components/TaskForm.jsx
import React, { useState } from 'react';
import { TextInput, Textarea, Select, Button, Group } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [dueDate, setDueDate] = useState('');

  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [statusError, setStatusError] = useState('');
  const [dueDateError, setDueDateError] = useState('');

  const validateTitle = (value) => {
    if (!value.trim()) {
      setTitleError('Title is required');
      return false;
    } else if (value.length > 50) {
      setTitleError('Title cannot be longer than 50 characters');
      return false;
    }
    setTitleError('');
    return true;
  };

  const validateDescription = (value) => {
    if (value.length > 500) {
      setDescriptionError('Description must be under 500 characters');
      return false;
    }
    setDescriptionError('');
    return true;
  };

  const validateStatus = (value) => {
    if (!value) {
      setStatusError('Please select a status');
      return false;
    }
    setStatusError('');
    return true;
  };

  const validateDueDate = (value) => {
    if (!value) {
      setDueDateError('Due date is required');
      return false;
    }
    setDueDateError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTitleValid = validateTitle(title);
    const isDescValid = validateDescription(description);
    const isStatusValid = validateStatus(status);
    const isDueValid = validateDueDate(dueDate);

    if (!isTitleValid || !isDescValid || !isStatusValid || !isDueValid) {
      return;
    }

    const newTask = { title, description, status, dueDate };
    onSubmit(newTask);

    showNotification({
      title: 'Task Created',
      message: 'Your task has been added successfully.',
    });

    setTitle('');
    setDescription('');
    setStatus('pending');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Focusable task form title */}
      <h2 tabIndex="0">Create New Task</h2>

      <Group direction="column" grow mb="md" spacing="xs">
        <TextInput
          label="Title"
          placeholder="E.g., Finish assignment"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            validateTitle(e.target.value);
          }}
          error={titleError}
          required
        />

        <Textarea
          label="Description"
          placeholder="Optional (max 500 characters)"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            validateDescription(e.target.value);
          }}
          error={descriptionError}
        />

        <Select
          label="Status"
          value={status}
          onChange={(value) => {
            setStatus(value);
            validateStatus(value);
          }}
          data={[
            { value: 'pending', label: 'Pending' },
            { value: 'in-progress', label: 'In Progress' },
            { value: 'completed', label: 'Completed' },
          ]}
          error={statusError}
        />

        <TextInput
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => {
            setDueDate(e.target.value);
            validateDueDate(e.target.value);
          }}
          error={dueDateError}
        />
      </Group>

      <Button type="submit">Create Task</Button>
    </form>
  );
};

export default TaskForm;
