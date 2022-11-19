import { useTheme } from 'next-themes';
import React from 'react';

import { Box, Button } from '@/components/ds';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="1"
      color="primary"
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      aria-label="Toggle Theme"
      css={{
        fontFamily: '"Lateral Extended Bold", sans-serif',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 'normal',
        transition: 'color 0.4s ease'
      }}
    >
      theme
    </Button>
  );
};

export const AlternateThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Box css={{ position: 'absolute', top: 0, right: 0, padding: 24, margin: 'auto' }}>
      <Button
        size="1"
        color="nothing"
        onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
        aria-label="Toggle Theme"
        css={{
          fontFamily: '"Lateral Extended Medium", sans-serif',
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: '0.04rem',
          lineHeight: 'normal',
          height: 'auto',
          transition: 'color 0.4s ease',
          '&:hover': {
            color: '$lime10',
            cursor: 'crosshair'
          }
        }}
      >
        THEME
      </Button>
    </Box>
  );
};
