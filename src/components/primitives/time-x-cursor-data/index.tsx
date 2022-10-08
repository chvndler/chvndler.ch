import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'stitches.config';

import { Box, Text } from '@/components/ds';

const StyledText = styled('div', {
  color: '$chxn4',
  fontSize: 14,
  fontFamily: '$antarcticanMono',
  fontWeight: '500',
  lineHeight: '28px',
  letterSpacing: '0.05rem',
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  padding: 0,
  margin: 'auto',
  width: 'auto',
  '> :span': {
    display: 'inline-flex',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center'
  }
});

const DisplayText = StyledText;

export const CursorDataValue = () => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const format = (num: string | number, pad: number) => {
      return num.toString().padStart(pad, '0');
    };

    const setFromEvent = (event: { clientX: string | number; clientY: string | number }) => {
      const x = format(event.clientX, 4);
      const y = format(event.clientY, 4);
      setDisplay(`X,Y:  ${x},${y}`);
    };

    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return (
    <>
      <Text
        css={{
          color: '$chxn4',
          fontSize: 14,
          fontFamily: '$antarcticanMono',
          fontWeight: '500',
          lineHeight: '28px',
          letterSpacing: '0.05rem'
        }}
      >
        <Box css={{ marginLeft: 8, '@sm': { display: 'none' } }}>{display}</Box>
      </Text>
    </>
  );
};

export const TimeValue = ({ variant }: { variant?: 'mobile' }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const renderTime = useCallback((date: Date) => {
    let hours: number | string = date.getHours();
    let minutes: number | string = date.getMinutes();
    let seconds: number | string = date.getSeconds();
    const isAm = hours <= 12;
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return (
      <DisplayText>
        <span>
          {hours}:{minutes}:{seconds} <span>{isAm ? 'AM' : 'PM'}</span>
        </span>
      </DisplayText>
    );
  }, []);

  return (
    <>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          px: '$$px',
          height: '100%',
          ...(variant === 'mobile'
            ? {
                flexGrow: 1,
                justifyContent: 'center'
              }
            : undefined)
        }}
      >
        <Box css={{ marginRight: 8 }}>{renderTime(now)}</Box>
      </Box>
    </>
  );
};

export const TimePlusCursorData = () => {
  return (
    <Box
      css={{
        width: '100vw',
        position: 'fixed',
        top: 60,
        right: 0,
        left: 0,
        display: 'inline-flex',
        flexDirection: 'row',
        gap: '2',
        padding: 0,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        margin: 'auto'
      }}
    >
      <TimeValue />
      <Box css={{ '@sm': { display: 'none' } }}>⋅</Box>
      <CursorDataValue />
    </Box>
  );
};
