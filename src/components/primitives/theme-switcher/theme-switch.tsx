import { useTheme } from 'next-themes';
import React from 'react';

import { IconButton } from '@/components/ds';
import { Icxn } from '@/components/icons/atlr-icxns';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
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
      <Icxn variant={'Sun'} />
    </IconButton>
  );
};
