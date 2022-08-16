import { IconButton, Text } from '@/ui';
import React from 'react';


export const MobileCmd = () => {

  return (
    <>
    <IconButton aria-label="Invoke Cmd+k Menu">
      <Text css={{ fontSize: '11px', color: '$hiContrast' }}>
        ⌘K
      </Text>
    </IconButton>
    </>
  );
};
