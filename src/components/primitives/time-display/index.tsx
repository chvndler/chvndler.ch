import { useCallback, useEffect, useState } from 'react';
import * as React from 'react';
import { styled, theme } from 'stitches.config';

import { Box } from '@/components/ds';

const StyledTime = styled('div', {
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'uppercase',
  letterSpacing: 'normal',
  lineHeight: '1',
  color: theme.colors.mauveA12,
  fontFamily: theme.fonts.mono,
  fontSize: 13,
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

const TimeString = StyledTime;

export const TimeDisplay = ({ variant }: { variant?: 'mobile' }) => {
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
      <TimeString>
        <Box css={{ marginRight: 8, fontWeight: 200 }}>UTC-5 EST</Box>
        <Box css={{ marginRight: 2 }}>
          {hours}:{minutes}:{seconds}
        </Box>
        <Box css={{ marginLeft: 2 }}>{isAm ? 'AM' : 'PM'}</Box>
      </TimeString>
    );
  }, []);

  return (
    <>
      <Box
        css={{
          color: '$sage12',
          display: 'flex',
          alignItems: 'center',
          ...(variant === 'mobile'
            ? {
                flexGrow: 1,
                justifyContent: 'center'
              }
            : undefined)
        }}
      >
        {renderTime(now)}
      </Box>
    </>
  );
};
