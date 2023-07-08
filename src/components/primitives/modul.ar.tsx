'use client';

import React, { useEffect, useState } from 'react';

export default function ModularTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
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

  return (
    <div>
      <time>
        <span className='font-mono text-xs font-[500] text-carbon-600'>
          {timeString} EST USA
        </span>
      </time>
    </div>
  );
}
