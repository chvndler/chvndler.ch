import React from 'react';
import { Box } from '@/ui';
import { AtelierSwitch } from '@/components/Switch';
import { useTheme } from 'next-themes';


export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Box css={{
      display: 'flex',
      zIndex: '999',
      position: 'relative',
      width: 'auto',
      height: 'auto',
      margin: 'auto',
      alignItems: 'right',
      textAlign: 'right',
      justifyContent: 'flex-end'
    }}>
      <AtelierSwitch
        onCheckedChange={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      />
    </Box>
  );
}
