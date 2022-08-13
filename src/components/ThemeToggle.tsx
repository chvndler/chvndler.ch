import React, { useState } from 'react';
import { Box } from '@/ui';
import { AtelierSwitch } from '@/components/Switch';
import { darkTheme } from '@/lib/stitches.config';

export function ThemeToggle() {
  // const [theme, setTheme] = React.useState('theme-default');
  const [theme, setTheme] = useState('theme-default');

  React.useEffect(() => {
    document.body.classList.remove('theme-default', darkTheme);
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Box css={{
      zIndex: '999',
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'auto',
      height: 'auto',
      paddingTop: '24px',
      paddingLeft: '20px',
      paddingRight: '20px',
      margin: 0,
    }}>
      <AtelierSwitch
        onCheckedChange={() => setTheme(theme === 'theme-default' ? darkTheme : 'theme-default')}
        css={{}}
      />
    </Box>
  );
}
