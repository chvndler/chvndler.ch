import React, { useEffect, useState } from 'react';
import { styled, theme } from 'stitches.config';

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

  return <CursorText>{display}</CursorText>;
};

export const CursorData = () => {
  return <Value />;
};

export default CursorData;

const CursorText = styled('span', {
  fontSize: 11.5,
  color: theme.colors.chxn4,
  textAlign: 'center',
  fontFamily: theme.fonts.mono,
  fontWeight: 'bold',

  lineHeight: 'auto',
  letterSpacing: '0.08rem',
  textTransform: 'uppercase',
  margin: 0,
  marginRight: 10
});
