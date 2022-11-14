import { useCallback, useEffect, useState } from 'react';
import * as React from 'react';
import { styled } from 'stitches.config';

import { Box } from '@/components/ds';

const StyledTime = styled('div', {
  border: 'none',
  display: 'inline-flex',
  gap: '2',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  lineHeight: '2',
  fontFamily: '"Lateral Extended Medium", sans-serif',
  fontWeight: 500,
  fontSize: 12,
  padding: 0,
  margin: 'auto',
  width: '90px',
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
