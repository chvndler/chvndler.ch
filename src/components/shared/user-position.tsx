'use client';

// client

import { useEffect, useState } from 'react';

function Value() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, '0');
    };

    const setFromEvent = (event: { clientX: string | number; clientY: string | number }) => {
      const x = format(event.clientX, 5);
      const y = format(event.clientY, 5);
      setDisplay(`X ${x}, Y ${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return <>{display}</>;
}

export function CursorPosition() {
  return <Value />;
}
