import React, { useEffect, useState } from 'react';

import { Box, Text } from '@/components/ds';

const Value = () => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, '0');
    };

    const setFromEvent = (event: { clientX: string | number; clientY: string | number }) => {
      const x = format(event.clientX, 5);
      const y = format(event.clientY, 5);
      setDisplay(`X* ${x}, Y* ${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    <Text
      css={{
        color: '$chxn4',
        fontSize: 10,
        fontFamily: '"Lateral Extended Medium", sans-serif',
        fontWeight: 500,
        lineHeight: 'auto',
        letterSpacing: '0.05rem'
      }}
    >
      {display}
    </Text>
  );
};

export const CursorData = () => {
  return (
    <Box
      css={{
        position: 'relative',
        padding: 0,
        textAlign: 'center'
      }}
    >
      <Value />
    </Box>
  );
};

export default CursorData;
