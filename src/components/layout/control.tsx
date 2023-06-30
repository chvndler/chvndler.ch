'use client';

import React from 'react';
import useWindowSize from '../../lib/hooks/use-window-size';

export const AppController = ({ children }: { children: React.ReactNode }) => {
  const windowSize = useWindowSize();

  if (windowSize.isMobile) {
    return (
      <>
        <div className='flex-1 px-3'>
          <div className='container mx-auto h-auto w-full max-w-[620px] items-center py-10'>
            {children}
          </div>
        </div>
      </>
    );
  } else
    return (
      <div className='flex-1 px-3'>
        <div className='container mx-auto h-full min-h-[90vh] w-full max-w-[620px] items-center py-10'>
          {children}
        </div>
      </div>
    );
};
