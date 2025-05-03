// src/components/TaskList.jsx
import React from 'react';
import { Stack, Text } from '@mantine/core';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <Text>No tasks available.</Text>;
  }

  return (
    <section aria-labelledby="task-list-title">
      <h2 id="task-list-title">Task List</h2> {/* Proper heading for structure */}
      <Stack spacing="md">
        {tasks.map((task) => (
          <div
            key={task._id || task.id} // Ensure a unique key for each task
            tabIndex="0" // Make each task focusable for keyboard navigation
            aria-labelledby={`task-${task._id || task.id}`}
          >
            <TaskCard
              title={task.title}
              description={task.description}
              status={task.status}
              dueDate={task.dueDate}
            />
          </div>
        ))}
      </Stack>
    </section>
  );
};

export default TaskList;
