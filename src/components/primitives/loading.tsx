'use client';

import React, { useState, useEffect } from 'react';

export const Loading = () => {
  const [showLoading, setShowLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000); // Set the time for 2 seconds
  }, []);

  return (
    <div className='app'>
      {showLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Loaded</h1>
        </div>
      )}
    </div>
  );
};
