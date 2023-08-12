'use client';

import React, { useState, useEffect } from 'react';
export const Loading: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

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
        <div>{/* Your main content */}</div>
      )}
    </div>
  );
};
