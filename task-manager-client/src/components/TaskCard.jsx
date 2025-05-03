// src/components/TaskCard.jsx
import React from 'react';
import { Card, Text, Badge, Group } from '@mantine/core';

const TaskCard = ({ title, description, status, dueDate }) => {
  const statusColor = {
    pending: 'gray',
    'in-progress': 'blue',
    completed: 'green',
  };

  // Handle missing data and ensure proper formatting
  const displayDescription = description || 'No description provided.';
  const displayDueDate = dueDate ? new Date(dueDate).toLocaleDateString() : 'No due date set';

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color={statusColor[status] || 'gray'}>{status}</Badge>
      </Group>
      <Text size="sm" color="dimmed">
        {displayDescription}
      </Text>
      <Text size="xs" color="gray" mt="xs">
        {displayDueDate}
      </Text>
    </Card>
  );
};

export default TaskCard;
