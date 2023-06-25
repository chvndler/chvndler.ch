'use client';

import * as React from 'react';

export const ModularTime = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  /** ---------------------------- 
  const timezoneString = currentTime.toLocaleString('en-US', {
    timeZoneName: 'short',
  });

  ** ---------------------------- */

  return (
    <>
      <time>
        <span className='font-mono text-xs font-[500] text-carbon-600'>{timeString} EST USA</span>
      </time>
    </>
  );
};
