import { useCallback, useEffect, useState } from 'react';
import * as React from 'react';
import { styled } from 'stitches.config';

import { Box } from '@/components/ds';

const StyledTime = styled('div', {
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase',
  // letterSpacing: '0.06em',
  letterSpacing: 'normal',
  lineHeight: '2',
  fontFamily: '$antarcticanMono',
  fontWeight: 'normal',
  fontSize: 15,
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
        <span>
          {hours}:{minutes}:{seconds} <span>{isAm ? 'AM' : 'PM'}</span>
        </span>
      </TimeString>
    );
  }, []);

  return (
    <>
      <Box
        css={{
          color: '$sage9',
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
