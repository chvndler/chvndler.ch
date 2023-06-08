import React from 'react';
import { cn } from '../../lib/utils';

export const MediaWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id='wrap-three' className={cn(`wrap-layer1`)}>
      <div id='wrap-two' className={cn(`wrap-layer2 max-h-fit flex-1 px-3 pb-12 pt-16`)}>
        <div
          id='wrap-one'
          className='container items-center w-full h-auto max-w-screen-lg min-h-screen mx-auto'
        >
          {children}
        </div>
      </div>
    </div>
  );
};
