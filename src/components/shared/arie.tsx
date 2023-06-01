'use client';

import * as React from 'react';

type MouseEvent = {
  clientX: number;
  clientY: number;
};

type ValueProps = React.HTMLAttributes<HTMLDivElement>;

function Value(props: ValueProps) {
  const [display, setDisplay] = React.useState('X 000000– Y 000000');

  const format = React.useCallback((num: string | number, pad: number) => {
    return num.toString().padStart(pad, '0');
  }, []);

  const setFromEvent = React.useCallback(
    (event: MouseEvent) => {
      const x = format(event.clientX, 6);
      const y = format(event.clientY, 6);
      setDisplay(`X ${x}– Y ${y}`);
    },
    [format],
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, [setFromEvent]);

  return <>{display}</>;
}

export const AriePosition = React.memo(() => {
  return <Value />;
});

export default function useArie(ValueProps: ValueProps) {
  return <Value {...ValueProps} />;
}

AriePosition.displayName = 'AriePosition';
