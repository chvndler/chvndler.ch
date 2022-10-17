import { useTheme } from 'next-themes';
import React from 'react';

import { Button } from '@/components/ds';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="1"
      color="nothing"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      aria-label="Toggle Theme"
      css={{ fontFamily: '$druk', fontWeight: 'normal', fontSize: 10, lineHeight: 'normal', height: 'auto' }}
    >
      THEME
    </Button>
  );
};
