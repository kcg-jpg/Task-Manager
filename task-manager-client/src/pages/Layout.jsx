import React from 'react';
import { Container, Flex, Title, Button, Group } from '@mantine/core';
import { Outlet, NavLink } from 'react-router-dom';

// ⬇️ Added Drag-and-Drop to navigation items
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'About', to: '/about' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
  { label: 'Drag & Drop', to: '/drag-and-drop' }, // New item added here
];

const Layout = () => {
  return (
    <>
      {/* Header */}
      <Container fluid py="md" style={{ backgroundColor: '#ffffff' }}>
        <Flex justify="space-between" align="center">
          {/* Logo - Black Color */}
          <Title order={3} fw={700} style={{ color: '#000000' }}>
            Task Manager
          </Title>

          {/* Navigation */}
          <Group spacing="md">
            {navItems.map((item) => (
              <Button
                key={item.to}
                variant="subtle"
                component={NavLink}
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive ? '#1971c2' : '#1c7ed6',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: isActive ? 'underline' : 'none',
                })}
              >
                {item.label}
              </Button>
            ))}
          </Group>
        </Flex>
      </Container>

      {/* Page Content */}
      <Container my="lg" style={{ minHeight: '80vh', position: 'relative' }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
