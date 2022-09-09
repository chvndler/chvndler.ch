import React from 'react';
import { Box, Text } from '@/ui';
import { ThemeToggle } from '@/components/ThemeToggle';

export function AppBar() {
  return (
    <>
      <Box
        css={{
          position: 'fixed',
          top: '0',
          right: '0',
          left: '0',
          padding: '20px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'stretch',
        }}>
        <Text css={{ fontSize: '13px' }}>chvndler.ch</Text>
        <ThemeToggle />
      </Box>
    </>
  );
}
