// src/pages/Home.jsx
import React from 'react';
import { Title, Text, Container } from '@mantine/core';

const Home = () => {
  return (
    <Container>
      <Title order={2}>Welcome to the Task Manager</Title>
      <Text mt="md">
        Use the navigation above to create and manage your tasks.
      </Text>
    </Container>
  );
};

export default Home;
