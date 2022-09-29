import React, { useEffect, useState } from 'react';

import { Box, Text } from '@/components/ds';

const Value = () => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, '0');
    };

    const setFromEvent = (event: { clientX: string | number; clientY: string | number }) => {
      const x = format(event.clientX, 4);
      const y = format(event.clientY, 4);
      setDisplay(`X, Y:  ${x},${y}`);
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
        fontSize: 14,
        fontFamily: '$antarcticanMono',
        // fontFamily: '$neueBit',
        fontWeight: '500',
        lineHeight: '28px',
        letterSpacing: '0.05rem'
        //transformOrigin: '0',
        // transform: 'rotate(90deg)'
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
        padding: 0,
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <Value />
    </Box>
  );
};

export default CursorData;
