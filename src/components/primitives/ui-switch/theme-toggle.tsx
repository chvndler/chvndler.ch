import { useTheme } from 'next-themes';
import React from 'react';

import { Flex } from '@/components/ds';

import { Switch, SwitchThumb } from './index';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <form>
      <Flex css={{ alignItems: 'center' }}>
        <Switch
          onCheckedChange={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
          aria-label="Change Theme"
          id="s1"
        >
          <SwitchThumb />
        </Switch>
      </Flex>
    </form>
  );
};
